import { FaMotorcycle, FaShoppingBag, FaUber, FaUtensils } from 'react-icons/fa';

const Order = () => {

    const platforms = [
    {
      name: 'Uber Eats',
      icon: <FaUber className="text-4xl md:text-5xl text-green-600" />,
      url: 'https://www.ubereats.com/',
      gradient: 'from-green-400 to-green-600',
      hoverShadow: 'hover:shadow-green-500/50',
    },
    {
      name: 'Just Eat',
      icon: <FaUtensils className="text-4xl md:text-5xl text-orange-500" />,
      url: 'https://www.just-eat.co.uk/',
      gradient: 'from-orange-400 to-orange-600',
      hoverShadow: 'hover:shadow-orange-500/50',
    },
    {
      name: 'Deliveroo',
      icon: <FaMotorcycle className="text-4xl md:text-5xl text-cyan-500" />,
      url: 'https://www.deliveroo.co.uk/',
      gradient: 'from-cyan-400 to-cyan-600',
      hoverShadow: 'hover:shadow-cyan-500/50',
    },
    {
      name: 'Foodhub',
      icon: <FaShoppingBag className="text-4xl md:text-5xl text-red-500" />,
      url: 'https://foodhub.co.uk/',
      gradient: 'from-red-400 to-red-600',
      hoverShadow: 'hover:shadow-red-500/50',
    },
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1306541/pexels-photo-1306541.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Order Your Favorites</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Scoops & Sips - Happiness delivered to your doorstep 🍦🧋
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Choose Your Delivery Platform
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Order through your favorite delivery service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-gradient-to-br ${platform.gradient} p-8 md:p-10 rounded-3xl shadow-xl ${platform.hoverShadow} hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center justify-center space-y-4">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                    {platform.icon}
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                    {platform.name}
                  </span>
                  <div className="text-sm text-white/90 font-medium">
                    Order Now
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
 
    
  );
};

export default Order;
