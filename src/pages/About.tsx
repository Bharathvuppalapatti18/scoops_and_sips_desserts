import React from 'react';
import { Heart, IceCream, Award, Clock } from 'lucide-react';
import dessertsTeam from './../../public/ice_1.jpeg';
import dessertPhilosophy from './../../public/ice_2.jpeg';


const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1600)', // ice cream background
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Crafting happiness, one scoop and sip at a time 🍨☕
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Scoops & Sips Desserts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At <strong>Scoops & Sips</strong>, we believe every bite and every sip should be a little moment of joy. 
                From creamy sundaes and handcrafted ice creams to refreshing shakes and rich desserts, 
                each creation is made with passion and love.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey started with one goal — to blend creativity and quality in every scoop. 
                Using the freshest ingredients, we craft desserts that not only taste incredible but also tell a story of happiness and togetherness.
              </p>
              <p className="text-lg text-gray-600">
                Whether it’s a cozy evening treat or a celebration with friends, Scoops & Sips is here to make every moment sweeter.
              </p>
            </div>
            <div>
              <img
                src={dessertsTeam}
                alt="Scoops and Sips team making desserts"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={dessertPhilosophy}
                alt="Assorted desserts and shakes"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                Desserts are more than food — they’re an expression of joy, creativity, and warmth. 
                At <strong>Scoops & Sips</strong>, we put our heart into every recipe, 
                ensuring every scoop and sip feels like a little celebration.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Ingredients</h4>
                    <p className="text-gray-600">
                      We use only the freshest fruits, dairy, and premium flavors for every creation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Creativity</h4>
                    <p className="text-gray-600">
                      Our desserts are crafted with a playful twist — merging classic tastes with new ideas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Happiness</h4>
                    <p className="text-gray-600">
                      We believe every dessert should bring a smile — that’s our sweetest success.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
