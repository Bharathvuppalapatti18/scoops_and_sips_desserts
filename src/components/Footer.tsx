import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from 'lucide-react';
import logo from '../../public/logo_ss-2.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand / About */}
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Scoops & Sips Desserts"
                className="h-20 w-auto"
              />
            </div>

            <p className="text-gray-300 mb-4">
              Indulge in delightful desserts and refreshing beverages crafted with love. 
              At Scoops & Sips Desserts, every bite and sip is a moment of pure bliss.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/scoopsandsipsdesserts_leeds?igsh=MWI1NWIxdWg4MWxtcw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* TikTok Icon (custom SVG) */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M448,209.9a210.1,210.1,0,0,1-122.1-38.9V349.4a162.7,162.7,0,1,1-144.6-161v81.3a81.3,81.3,0,1,0,56.6,77.5V0h88a122.1,122.1,0,0,0,121.8,121.8Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="/menu" className="hover:text-pink-400 transition-colors">Menu</a></li>
              <li><a href="/order" className="hover:text-pink-400 transition-colors">Order Online</a></li>
              <li><a href="/contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-pink-400 mr-2" />
                <span className="text-gray-300 text-sm">
                  62 Brudenell Rd, Leeds LS6 1EG, <br />United Kingdom
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-pink-400 mr-2" />
                <span className="text-gray-300 text-sm">+44 77756 04501</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-pink-400 mr-2" />
                <span className="text-gray-300 text-sm">scoopsandsipsdesserts@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock className="h-4 w-4 text-pink-400 mr-2 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>Mon – Tue: 11:00 AM – 11:00 PM</p>
                  <p>Wed: Closed</p>
                  <p>Thu – Sun: 11:00 AM – 11:00 PM</p>
                  <p>Kitchen closes at 10:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Scoops & Sips Desserts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
