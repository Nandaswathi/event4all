import React from 'react';
import { Calendar, Users, PartyPopper, Building2, HeartHandshake, Mic2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Events",
      description: "From conferences and seminars to team building activities and product launches, we create professional corporate events that align with your business objectives.",
      features: ["Conferences", "Team Building", "Product Launches", "Award Ceremonies"]
    },
    {
      icon: HeartHandshake,
      title: "Weddings",
      description: "Your dream wedding brought to life with meticulous attention to detail. We handle everything from intimate ceremonies to grand celebrations.",
      features: ["Ceremony Planning", "Reception Design", "Vendor Coordination", "Timeline Management"]
    },
    {
      icon: PartyPopper,
      title: "Social Events",
      description: "Make your special moments unforgettable with our expertly planned social events, from birthdays to anniversaries.",
      features: ["Birthday Parties", "Anniversaries", "Graduation Parties", "Family Reunions"]
    },
    {
      icon: Calendar,
      title: "Private Parties",
      description: "Exclusive private events tailored to your preferences, ensuring a unique and memorable experience for you and your guests.",
      features: ["Theme Parties", "Holiday Celebrations", "Dinner Parties", "Garden Parties"]
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Bringing people together through well-organized community events that create lasting connections and memories.",
      features: ["Festivals", "Charity Events", "Block Parties", "Cultural Celebrations"]
    },
    {
      icon: Mic2,
      title: "Entertainment Events",
      description: "From concerts to performances, we handle all aspects of entertainment event planning and execution.",
      features: ["Concerts", "Performances", "Award Shows", "Galas"]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of event planning services to make your occasions truly special and memorable.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">{service.title}</h3>
                  <p className="mt-4 text-gray-600 text-center">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}