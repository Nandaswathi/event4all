import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Menu, X, LogIn, LogOut, UserPlus, User, PlusCircle } from 'lucide-react';
import SearchBar from './SearchBar';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Implement search functionality
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">Event4All</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              Portfolio
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              Contact
            </Link>
            <Link to="/organize-event" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium flex items-center">
              <PlusCircle className="h-5 w-5 mr-1" />
              Organize Event
            </Link>
            
            <SearchBar onSearch={handleSearch} />

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center text-gray-700 hover:text-purple-600"
                >
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-2">
                    <User className="h-5 w-5" />
                  </div>
                  <span>{user.name || 'User'}</span>
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/my-events"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      My Events
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsProfileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="flex items-center text-gray-700 hover:text-purple-600"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center text-gray-700 hover:text-purple-600"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/organize-event"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <PlusCircle className="h-5 w-5 mr-1" />
              Organize Event
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
                  onClick={() => setIsOpen(false)}
                >
                  Your Profile
                </Link>
                <Link
                  to="/my-events"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
                  onClick={() => setIsOpen(false)}
                >
                  My Events
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}