import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Edit, Trash2, Plus, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string | null;
  location: string;
  description: string | null;
  category: string | null;
  guest_count: number | null;
  image_url: string | null;
  budget: string | null;
  created_at: string;
}

export default function MyEvents() {
  const { user } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (user) {
      fetchEvents();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('events')
        .select('*')
        .eq('user_id', user?.id)
        .order('date', { ascending: true });

      if (fetchError) throw fetchError;

      setEvents(data || []);
    } catch (err: any) {
      console.error('Error fetching events:', err);
      setError('Failed to load your events');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      setLoading(true);
      const { error: deleteError } = await supabase
        .from('events')
        .delete()
        .eq('id', deleteId)
        .eq('user_id', user?.id); // Ensure user can only delete their own events

      if (deleteError) throw deleteError;

      // Remove the deleted event from state
      setEvents(events.filter(event => event.id !== deleteId));
      setShowDeleteConfirm(false);
      setDeleteId(null);
    } catch (err: any) {
      console.error('Error deleting event:', err);
      setError('Failed to delete event');
    } finally {
      setLoading(false);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setDeleteId(null);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!user) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">My Events</h1>
            <p className="mt-2 text-gray-600">Please <a href="/login" className="text-purple-600 hover:text-purple-500">log in</a> to view your events</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Events</h1>
          <Link
            to="/organize-event"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Event
          </Link>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : events.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No events found</h2>
            <p className="text-gray-600 mb-6">You haven't created any events yet.</p>
            <Link
              to="/organize-event"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create Your First Event
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {event.image_url ? (
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      // Fallback image if the URL is invalid
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                ) : (
                  <div className="w-full h-48 bg-purple-100 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-purple-300" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                      <span>{formatDate(event.date)}</span>
                      {event.time && <span className="ml-2">{event.time}</span>}
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                      <span>{event.location}</span>
                    </div>
                    
                    {event.guest_count && (
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2 text-purple-600" />
                        <span>{event.guest_count} guests</span>
                      </div>
                    )}
                  </div>
                  
                  {event.description && (
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div>
                      {event.category && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {event.category}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDeleteClick(event.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                        aria-label="Delete event"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                      <Link
                        to={`/edit-event/${event.id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                        aria-label="Edit event"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this event? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}