import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import OrganizeEvent from './pages/OrganizeEvent';
import MyEvents from './pages/MyEvents';
import Chatbot from './components/Chatbot';
import { AuthProvider } from './context/AuthContext';

function App() {
  // Using the provided API key
  const chatbotApiKey = "AIzaSyDupk0srcxaypHM9D5rMkBuUgeoX24oYmk";

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/organize-event" element={<OrganizeEvent />} />
              <Route path="/my-events" element={<MyEvents />} />
              {/* Add other routes as they are created */}
            </Routes>
          </main>
          <Footer />
          <Chatbot apiKey={chatbotApiKey} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;