import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ride the Future with Style
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Discover our premium collection of skateboards designed for both beginners and pros.
            Crafted with passion, built for performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur rounded-full text-white font-semibold hover:bg-white/20 transition-colors">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}