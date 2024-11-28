import React from 'react';

const team = [
  {
    name: 'Alex Rodriguez',
    role: 'Pro Skater',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah Chen',
    role: 'Street Style Champion',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
  },
  {
    name: 'Mike Johnson',
    role: 'Park Specialist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-white/80">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}