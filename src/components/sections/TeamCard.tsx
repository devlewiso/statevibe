import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-white/80">{role}</p>
    </div>
  );
}