import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { menuData, MenuItem } from '../data/menuData';



interface FlatMenuItem extends MenuItem {
  categoryName: string;
  subcategoryName: string;
  categoryId: string;
  subcategoryId: string;
}

const FullMenu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<FlatMenuItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const flatMenuItems: FlatMenuItem[] = menuData.flatMap(category =>
    category.subcategories.flatMap(subcategory =>
      subcategory.items.map(item => ({
        ...item,
        categoryName: category.name,
        subcategoryName: subcategory.name,
        categoryId: category.id,
        subcategoryId: subcategory.id
      }))
    )
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = flatMenuItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const scrollToItem = (itemId: string) => {
    const element = document.getElementById(itemId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      element.classList.add('highlight-item');
      setTimeout(() => element.classList.remove('highlight-item'), 2000);
    }
    setSearchQuery('');
    setShowSuggestions(false);
  };

  //   const featuredDishes = [
  //     { name: 'Aloo Tikki', description: 'Crispy potato patties seasoned with spices...', price: '£3.95', image: [aloo_tikki] },
  //     { name: 'Pani Puri Shots', description: 'Crispy hollow puris filled with spiced chickpeas...', price: '£4.49', image: [pani_puri] },
  //     { name: 'Onion Bhajji', description: 'Crispy, golden fritters made with thinly sliced onions...', price: '£4.49', image: [onion_bhajji] },
  //     { name: 'Chole Bhature', description: 'Two fluffy bhatures served with spicy chickpeas...', price: '£6.99', image: [chole_bhature, poppadams_dips] },
  //     { name: 'Poppadams Dips', description: 'Thin wafers with chutneys.', price: '£2.99', image: [poppadams_dips] },
  //     { name: 'Vada Pav', description: 'A Bombay street food — a buttered bun with spiced potato vada.', price: '£5.49', image: [vada_pav] },
  //     { name: 'Chicken Lollipop', description: 'Crispy chicken wings shaped like lollipops.', price: '£8.99', image: [chicken_lollipop] },
  //     { name: 'Samosa', description: 'Crispy, golden pastries filled with spiced potatoes and peas.', price: '£2.99', image: [samosa] },
  //     { name: 'Chicken Biryani', description: 'Basmati rice flavored with chicken and whole masala mix.', price: '£9.99', image: [biryani_1, biryani_2] },
  //     { name: 'Masala Dosa', description: 'Crispy dosa filled with spiced potato masala.', price: '£5.99', image: [dosa_1, dosa_2] },
  //     { name: 'Gulab Jamun', description: 'Tender syrup-soaked balls with cardamom and rose water.', price: '£2.49', image: [gulab_jamun] },
  //     { name: 'Carrot Halwa', description: 'Sweet carrot dessert topped with crunchy nuts.', price: '£2.99', image: [carrot_halwa] },
  //     { name: 'Kala Jamun', description: 'Rich, dark khoya balls soaked in syrup.', price: '£2.49', image: [kala_jamun] }
  //   ];

  //   const [currentIndexes, setCurrentIndexes] = useState(featuredDishes.map(() => 0));
  //   const handleNext = (i: number) => setCurrentIndexes(prev => prev.map((v, j) => j === i ? (v + 1) % featuredDishes[i].image.length : v));
  //   const handlePrev = (i: number) => setCurrentIndexes(prev => prev.map((v, j) => j === i ? (v - 1 + featuredDishes[i].image.length) % featuredDishes[i].image.length : v));

  return (
    <div className="min-h-screen bg-pink-50">

      {/* HERO */}
      <section className="relative py-10 md:py-14 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1893560/pexels-photo-1893560.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg md:text-xl">Scoop, sip, and smile - explore our handcrafted desserts</p>
        </div>

        {/* Search */}
        <div className="relative z-10 max-w-2xl mx-auto mt-6" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search desserts... (e.g., Waffle, Brownie, Shake)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowSuggestions(true)}
              className="w-full pl-12 pr-12 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300 text-base md:text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setShowSuggestions(false); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-96 overflow-y-auto">
              {suggestions.map((item) => (
                <button key={item.id} onClick={() => scrollToItem(item.id)}
                  className="w-full px-4 py-3 text-left hover:bg-pink-50 border-b border-gray-100 last:border-b-0 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.categoryName}</div>
                    </div>
                    {item.price && <div className="text-pink-600 font-semibold">{item.price}</div>}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 🍨 CATEGORY SCROLL BAR */}
      <section className="relative overflow-hidden py-4 bg-gradient-to-r from-pink-200 via-pink-100 to-rose-200 shadow-md backdrop-blur-md">
        {/* Left/Right fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-pink-200 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-rose-200 to-transparent pointer-events-none"></div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-8 whitespace-nowrap animate-scroll">
            {menuData.concat(menuData).map((category, index) => (
              <button
                key={category.id + '-' + index}
                onClick={() => {
                  const element = document.getElementById(category.id);
                  if (element) {
                    const offset = 120;
                    const topPos = element.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: topPos, behavior: 'smooth' });
                  }
                }}
                className="inline-block bg-white/70 hover:bg-white/90 text-pink-700 font-semibold px-6 py-2 rounded-full border border-pink-300 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU LIST */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuData.map(category => (
            <div key={category.id} id={category.id} className="mb-12 md:mb-16 scroll-mt-32">
              <div className="mb-6 md:mb-8 pb-4 border-b-4 border-pink-400">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{category.name}</h2>
              </div>

              {category.subcategories.map((sub, subIndex) => (
                <div key={sub.id} className="mb-8 md:mb-12">
                  {/* 🍪 Category-specific highlight sections */}
                  {subIndex === 0 && (
                    <>
                      {/* 🧇 Waffles */}
                      {category.name.toLowerCase().includes('waffle') && (
                        <div className="mb-10 space-y-4">
                          <div className="bg-gradient-to-r from-pink-100 to-rose-100 border-l-4 border-pink-500 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-pink-700 mb-2">
                              Add Extra +£0.99 Each
                            </h4>
                            <p className="text-gray-700">
                              Fresh strawberry, fresh banana, rainbow sprinkles, chocolate sprinkles,
                              milk chocolate flakes, white chocolate flakes, toffee fudge pieces,
                              crushed Oreo cookies, fresh blueberry, fresh raspberry.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-yellow-50 to-pink-50 border-l-4 border-yellow-400 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-yellow-700 mb-2">
                              Add Extra Sauces +£0.99 Each
                            </h4>
                            <p className="text-gray-700">
                              Belgian milk chocolate, Belgian white chocolate, Nutella, strawberry,
                              caramel, tropical blue, raspberry.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* 🍪 Cookie Dough */}
                      {category.name.toLowerCase().includes('cookie dough') && (
                        <div className="mb-10 space-y-4">
                          <div className="bg-gradient-to-r from-pink-100 to-rose-100 border-l-4 border-pink-500 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-amber-700 mb-2">
                              Add Extra +£0.89 Each
                            </h4>
                            <p className="text-gray-700">
                              Rainbow sprinkles, chocolate sprinkles, milk chocolate flakes,
                              white chocolate flakes, toffee fudge pieces, crushed Oreo cookies,
                              fresh blueberry, fresh raspberry.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-yellow-50 to-pink-50 border-l-4 border-yellow-400 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-pink-700 mb-2">
                              Add Extra Sauces +£0.99 Each
                            </h4>
                            <p className="text-gray-700">
                              Belgian milk chocolate, Belgian white chocolate, Nutella, strawberry,
                              caramel, tropical blue, raspberry.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* 🥞 Luxury Crepes */}
                      {category.name.toLowerCase().includes('crepe') && (
                        <div className="mb-10 space-y-4">
                          <div className="bg-gradient-to-r from-pink-100 to-rose-100 border-l-4 border-pink-500 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-rose-700 mb-2">
                              Add Extra +£0.99 Each
                            </h4>
                            <p className="text-gray-700">
                              Rainbow sprinkles, chocolate sprinkles, milk chocolate flakes,
                              white chocolate flakes, toffee fudge pieces, crushed Oreo cookies,
                              fresh blueberry, fresh raspberry.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-yellow-50 to-rose-50 border-l-4 border-yellow-400 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-yellow-700 mb-2">
                              Add Extra Sauces +£0.99 Each
                            </h4>
                            <p className="text-gray-700">
                              Belgian milk chocolate, Belgian white chocolate, Nutella, strawberry,
                              caramel, tropical blue, raspberry.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* 🍩 Classic Donuts */}
                      {category.name.toLowerCase().includes('donut') && (
                        <div className="mb-10 space-y-4">
                          <div className="bg-gradient-to-r from-yellow-100 to-pink-50 border-l-4 border-pink-500 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-pink-700 mb-2">
                              Add Extra +£0.89 Each
                            </h4>
                            <p className="text-gray-700">
                              Rainbow sprinkles, chocolate sprinkles, milk chocolate flakes,
                              white chocolate flakes, toffee fudge pieces, crushed Oreo cookies.
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-rose-50 to-yellow-50 border-l-4 border-yellow-400 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-yellow-700 mb-2">
                              Add Extra Sauces +£0.99 Each
                            </h4>
                            <p className="text-gray-700">
                              Belgian milk chocolate, Belgian white chocolate, Nutella, strawberry,
                              caramel, tropical blue, raspberry.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* 🥞 Pancakes */}
                      {category.name.toLowerCase().includes('pancake') && (
                        <div className="mb-10 space-y-4">
                          <div className="bg-gradient-to-r from-pink-100 to-yellow-50 border-l-4 border-pink-400 rounded-lg p-5 shadow-sm">
                            <h4 className="text-lg md:text-xl font-bold text-pink-700 mb-2">
                              Topping (Choose Any 2)
                            </h4>
                            <p className="text-gray-700">
                              Fresh strawberry, fresh banana, rainbow sprinkles, chocolate sprinkles,
                              milk chocolate flakes, white chocolate flakes, toffee fudge pieces,
                              crushed Oreo cookies, fresh blueberry, fresh raspberry.
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* 🍨 Regular menu items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {sub.items.map(item => (
                      <div
                        key={item.id}
                        id={item.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 border border-gray-200"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h4>
                        {item.price && <p className="text-lg font-bold text-pink-600 mb-2">{item.price}</p>}
                        {item.description && (
                          <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}


            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Desserts</h2>
          <p className="text-xl text-gray-600 mb-8">Our sweetest favorites 🍨</p>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-8 min-w-max">
              {featuredDishes.map((dish, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden w-80 flex-shrink-0 relative hover:scale-105 transition-transform">
                  <div className="relative">
                    <img src={dish.image[currentIndexes[i]]} alt={dish.name} className="w-full h-48 object-cover" />
                    {dish.image.length > 1 && (
                      <>
                        <button onClick={() => handlePrev(i)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60">
                          <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => handleNext(i)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60">
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                    <p className="text-gray-600 mb-4">{dish.description}</p>
                    <span className="text-2xl font-bold text-pink-600">{dish.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* SCROLL ANIMATION STYLES */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
        .animate-scroll:hover { animation-play-state: paused; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default FullMenu;
