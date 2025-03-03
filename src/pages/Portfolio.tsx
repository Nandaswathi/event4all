import React from 'react';

export default function Portfolio() {
  const events = [
    {
      title: "Tech Conference 2024",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "A 3-day technology conference hosting 2000+ attendees with keynote speakers, workshops, and networking events."
    },
    {
      title: "Sarah & John's Wedding",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "An elegant garden wedding celebration for 150 guests with custom floral arrangements and gourmet catering."
    },
    {
      title: "Summer Music Festival",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "A weekend-long music festival featuring 20+ artists, food vendors, and interactive art installations."
    },
    {
      title: "Charity Gala Night",
      category: "Community",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "An annual fundraising event raising over $100,000 for local community initiatives."
    },
    {
      title: "Product Launch Event",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "A high-profile product launch event with media coverage, demonstrations, and VIP reception."
    },
    {
      title: "25th Anniversary Celebration",
      category: "Social",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "A silver jubilee celebration featuring live entertainment, custom decorations, and memorable moments."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of successfully executed events that showcase our expertise and creativity.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}