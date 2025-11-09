import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Quote, Star } from 'lucide-react';
// Hero images
import dessert1 from './../../public/ice_10.jpg';
import dessert2 from './../../public/ice_8.jpg';
import dessert3 from './../../public/ice_7.jpg';
import dessert4 from './../../public/ice_9.jpg';
import g_1 from './../../public/g_1.jpg';
import g_2 from './../../public/g_2.jpg';
import g_3 from './../../public/g_3.jpg';
import g_4 from './../../public/g_4.jpg';
import g_5 from './../../public/g_5.jpg';
import g_6 from './../../public/g_6.jpg';
import g_7 from './../../public/g_7.jpg';
import g_8 from './../../public/g_8.jpg';
import g_9 from './../../public/g_9.jpg';
import g_10 from './../../public/g_10.jpg';
import g_11 from './../../public/g_11.jpg';
import g_12 from './../../public/g_12.jpg';

// Reviewer images
import reviewer1 from './../../public/review-1.png';
import reviewer2 from './../../public/review-2.png';
import reviewer3 from './../../public/review-3.png';

const Home = () => {
  const heroImages = [dessert4, dessert3, dessert1, dessert2];
  const [currentImage, setCurrentImage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const galleryImages = [
    g_1, g_2, g_3, g_4, g_5, g_6, g_7, g_8, g_9, g_10, g_11, g_12
  ];

  const testimonials = [
    {
      name: 'Halinah Bi',
      text: 'Savi was amazing - super nice and made our desserts really fast! Everything tasted absolutely delicious, you can tell she puts care into her work. Great service and great food - highly recommend!',
      img: reviewer1
    },
    {
      name: 'Kieran Garside',
      text: 'We ordered via Uber Eats - very speedy delivery and nice and warm. The Biscoff cheesecake was creamy and not too sweet, the Cookies & Cream cake was soft and fluffy, and the doughnuts were perfectly topped. Great pricing too!',
      img: reviewer2
    },
    {
      name: 'Aksharkumar Solanki',
      text: 'Absolutely delightful! Scoops and Sips Desserts blew me away - creamy ice cream, cozy ambience, and friendly staff. Every bite felt like a mini celebration. Can’t wait to come back for more!',
      img: reviewer3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  return (
    <div className="relative bg-[#fff6f8]">
      {/* Hero Section — No Overlay / Blur */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${heroImages[currentImage]})`,
          }}
        ></div>

        {/* ❌ Removed black overlay completely */}
        {/* Text directly over image */}
        <div className="relative z-10 text-white px-4 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Scoops & Sips Desserts
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Indulge in handcrafted desserts, creamy scoops, and refreshing sips
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="inline-block bg-white text-[#e85c78] px-8 py-3 rounded-lg font-semibold shadow hover:bg-pink-50 hover:shadow-lg transition-all transform hover:scale-105"
            >
              Explore Menu
            </Link>

            <Link
              to="/order"
              className="inline-block bg-[#e85c78] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#f06d87] transition-all transform hover:scale-105"
            >
              Order Now
            </Link>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#fff2f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-[#e85c78] mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Our Sweet Gallery</h2>
          </div>
          <p className="text-xl text-gray-600 mb-10">
            A peek at our most loved desserts — creamy, colorful, and crafted with joy.
          </p>

          {/* Clean gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visibleImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl hover:shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={img}
                  alt={`Dessert ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block bg-[#e85c78] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#f06d87] transition-all transform hover:scale-105"
            >
              {showAll ? 'Show Less' : 'More Images'}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#ffeef2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-[#e85c78] mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>
          <p className="text-xl text-gray-600 mb-8">Real smiles from our dessert lovers 🍨</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow text-center border border-pink-100"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-pink-200 shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.name}</h3>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#e85c78] text-[#e85c78]" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
