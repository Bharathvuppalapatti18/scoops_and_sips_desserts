import React, { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Catering = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    eventType: '',
    menuPreference: '',
    dietaryRequirements: '',
    venue: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hiddenFormRef.current) {
      hiddenFormRef.current.submit();
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your catering request has been submitted successfully. We'll contact you soon
            to discuss your dessert table and event details.
          </p>
          <p className="text-md text-gray-500">
            You will also receive a confirmation email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/8969235/pexels-photo-8969235.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Dessert Catering</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Make your celebrations sweeter with Scoops & Sips Desserts 🍨
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sweet Moments, Crafted for You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether it’s a birthday, wedding, corporate event, or cozy celebration - 
            our dessert catering brings irresistible sweetness to your table. 
            From handcrafted sundaes to decadent cakes and refreshing mocktails, 
            every treat is made to delight your guests and make your day memorable.
          </p>
        </div>
      </section>

      {/* Catering Form */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request a Dessert Setup</h2>
            <p className="text-xl text-gray-600">
              Tell us about your event - we’ll prepare a customized dessert plan just for you!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
              </div>

              {/* Phone & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 1234 567890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select guest count</option>
                    <option value="10-25">10-25 guests</option>
                    <option value="26-50">26-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-200">101-200 guests</option>
                    <option value="200+">200+ guests</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Time *
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    required
                    value={formData.eventTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
              </div>

              {/* Event Type & Menu */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="babyshower">Baby Shower</option>
                    <option value="festival">Festival / Seasonal</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="menuPreference" className="block text-sm font-medium text-gray-700 mb-2">
                    Dessert Type
                  </label>
                  <select
                    id="menuPreference"
                    name="menuPreference"
                    value={formData.menuPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select dessert type</option>
                    <option value="icecream">Ice Creams</option>
                    <option value="cakes">Cakes & Pastries</option>
                    <option value="mocktails">Mocktails / Drinks</option>
                    <option value="mix">Mixed Dessert Table</option>
                  </select>
                </div>
              </div>

              {/* Venue */}
              <div>
                <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Venue *
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  required
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="Full address of the event venue"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              {/* Dietary Requirements */}
              <div>
                <label htmlFor="dietaryRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Requirements
                </label>
                <input
                  type="text"
                  id="dietaryRequirements"
                  name="dietaryRequirements"
                  value={formData.dietaryRequirements}
                  onChange={handleChange}
                  placeholder="Any allergies or dietary needs"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              {/* Additional Info */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Tell us more about your dessert setup or theme"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e85c78] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#f06d87] transition-colors"
              >
                Submit Request
              </button>
            </form>

            {/* Hidden FormSubmit */}
            <form
              ref={hiddenFormRef}
              action="https://formsubmit.co/scoopsandsipsdesserts@gmail.com"
              method="POST"
              style={{ display: 'none' }}
            >
              {Object.keys(formData).map((key) => (
                <input key={key} type="hidden" name={key} value={formData[key as keyof typeof formData]} />
              ))}
              <input type="hidden" name="_subject" value="New Catering Request - Scoops & Sips Desserts" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your catering inquiry with Scoops & Sips Desserts! We’ve received your request and will reach out shortly with a personalized dessert catering plan for your event."
              />
              <input type="hidden" name="_template" value="table" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;
