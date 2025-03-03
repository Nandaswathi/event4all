import React, { useState } from 'react';
import { ArrowRight, Filter, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter';
import CommentSection from '../components/CommentSection';
import CustomSocialShare from '../components/CustomSocialShare';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['Corporate', 'Wedding', 'Social', 'Entertainment', 'Community'];
  
  const comments = [
    {
      id: 1,
      user: "John Doe",
      content: "Amazing service! The team made our corporate event truly memorable.",
      date: "2024-03-15"
    },
    {
      id: 2,
      user: "Sarah Smith",
      content: "Our wedding was perfect thanks to Event4All. Highly recommended!",
      date: "2024-03-14"
    }
  ];

  const handleAddComment = (content: string) => {
    console.log('New comment:', content);
    // Implement comment addition logic
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Event Planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Creating Memorable Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              From corporate gatherings to weddings, we bring your vision to life with exceptional planning and flawless execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/organize-event"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10"
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Organize Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Organize Your Own Event Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Organize Your Own Event</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Take control of your event planning with our easy-to-use platform. Create, manage, and share your events in just a few clicks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlusCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Event</h3>
              <p className="text-gray-600 mb-4">
                Fill out our simple form with your event details, including date, location, and guest count.
              </p>
              <Link
                to="/organize-event"
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                Get Started →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Manage Details</h3>
              <p className="text-gray-600 mb-4">
                Keep track of all your event details in one place. Update information as your plans evolve.
              </p>
              <Link
                to="/my-events"
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                View Your Events →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share With Guests</h3>
              <p className="text-gray-600 mb-4">
                Easily share your event details with guests and keep everyone informed about your plans.
              </p>
              <Link
                to="/organize-event"
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Filter by:</span>
              <CategoryFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                onCategoryChange={setSelectedCategory} 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Corporate Event"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                    Corporate
                  </span>
                  <span className="text-gray-500 text-sm">June 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Tech Conference</h3>
                <p className="text-gray-600 mb-4">
                  Join industry leaders for a day of innovation, networking, and insights into the future of technology.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    San Francisco, CA
                  </span>
                  <CustomSocialShare url="https://event4all.com/events/tech-conference" title="Annual Tech Conference" />
                </div>
              </div>
            </div>
            
            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Wedding Event"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                    Wedding
                  </span>
                  <span className="text-gray-500 text-sm">July 8, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Garden Wedding Showcase</h3>
                <p className="text-gray-600 mb-4">
                  Experience the magic of outdoor weddings with our showcase of garden venues, floral designs, and reception ideas.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Botanical Gardens, NY
                  </span>
                  <CustomSocialShare url="https://event4all.com/events/garden-wedding" title="Garden Wedding Showcase" />
                </div>
              </div>
            </div>
            
            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Music Festival"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                    Entertainment
                  </span>
                  <span className="text-gray-500 text-sm">August 20-22, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Summer Music Festival</h3>
                <p className="text-gray-600 mb-4">
                  Three days of amazing performances across multiple stages, featuring top artists and emerging talent.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Riverside Park, Chicago
                  </span>
                  <CustomSocialShare url="https://event4all.com/events/summer-music-festival" title="Summer Music Festival" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with Event4All.
            </p>
          </div>
          
          <CommentSection comments={comments} onAddComment={handleAddComment} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Event?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's turn your vision into reality. Start planning your event today with Event4All.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/organize-event"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Create Your Event
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-purple-600"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}