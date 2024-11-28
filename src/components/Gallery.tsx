import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1572776685600-aca8c3456337?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1531565637446-32307b194362?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1569074187119-c87815b476da?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&q=80'
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Gallery
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}