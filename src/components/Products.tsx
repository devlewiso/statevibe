import React from 'react';

const products = [
  {
    id: 1,
    name: 'Pro Street Deck',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Urban Cruiser',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1531565637446-32307b194362?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Park Master',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80',
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Featured Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-white/80">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}