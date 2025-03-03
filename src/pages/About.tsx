import React from 'react';
import { Award, Users, Clock, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, value: "500+", label: "Events Organized" },
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: Sparkles, value: "50+", label: "Team Members" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "With over 20 years of experience in event planning, Sarah founded Event4All with a vision to create extraordinary experiences."
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Michael brings creative excellence to every event, ensuring unique and memorable experiences for our clients."
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Emily ensures flawless execution of events through her exceptional organizational and management skills."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Event4All</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about creating extraordinary events that leave lasting impressions. 
            Our team of experienced professionals is dedicated to turning your vision into reality.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Section */}
        <div className="mt-20">
          <div className="bg-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Event4All, our mission is to create exceptional events that exceed expectations and create lasting memories. 
              We believe in the power of bringing people together and making every moment count. Through our dedication to 
              excellence, attention to detail, and innovative approach, we transform ordinary occasions into extraordinary experiences.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}