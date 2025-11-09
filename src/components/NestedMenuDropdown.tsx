import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { menuData, MenuCategory, MenuSubcategory, MenuItem } from '../data/menuData';

interface NestedMenuDropdownProps {
  onItemSelect?: (item: MenuItem) => void;
  className?: string;
}

const NestedMenuDropdown: React.FC<NestedMenuDropdownProps> = ({ 
  onItemSelect, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveCategory(null);
        setActiveSubcategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (categoryId: string) => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setActiveCategory(null);
        setActiveSubcategory(null);
      }, 150);
    }
  };

  const handleSubcategoryEnter = (subcategoryId: string) => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setActiveSubcategory(subcategoryId);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    if (isMobile) {
      setActiveCategory(activeCategory === categoryId ? null : categoryId);
      setActiveSubcategory(null);
    }
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    if (isMobile) {
      setActiveSubcategory(activeSubcategory === subcategoryId ? null : subcategoryId);
    }
  };

  const handleItemClick = (item: MenuItem) => {
    onItemSelect?.(item);
    setIsOpen(false);
    setActiveCategory(null);
    setActiveSubcategory(null);
  };


  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Main Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
      >
        Browse Menu
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {menuData.map((category) => (
            <div key={category.id} className="relative">
              {/* Category Level */}
              <div
                className={`flex items-center justify-between px-4 py-3 text-sm font-medium cursor-pointer transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    category.id === 'veg' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  {category.name}
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${
                  activeCategory === category.id && isMobile ? 'rotate-90' : ''
                }`} />
              </div>

              {/* Subcategories */}
              {activeCategory === category.id && (
                <div className={`${isMobile ? 'relative' : 'absolute left-full top-0'} w-64 bg-white border border-gray-200 rounded-md shadow-lg ${isMobile ? 'border-t-0 rounded-t-none' : 'ml-1'}`}>
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory.id} className="relative">
                      {/* Subcategory Level */}
                      <div
                        className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-colors ${
                          activeSubcategory === subcategory.id 
                            ? 'bg-yellow-50 text-yellow-700' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onMouseEnter={() => handleSubcategoryEnter(subcategory.id)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleSubcategoryClick(subcategory.id)}
                      >
                        <span>{subcategory.name}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform ${
                          activeSubcategory === subcategory.id && isMobile ? 'rotate-90' : ''
                        }`} />
                      </div>

                      {/* Items */}
                      {activeSubcategory === subcategory.id && (
                        <div className={`${isMobile ? 'relative' : 'absolute left-full top-0'} w-80 bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto ${isMobile ? 'border-t-0 rounded-t-none' : 'ml-1'}`}>
                          {subcategory.items.map((item) => (
                            <div
                              key={item.id}
                              className="px-4 py-3 cursor-pointer hover:bg-orange-50 border-b border-gray-100 last:border-b-0 transition-colors"
                              onClick={() => handleItemClick(item)}
                            >
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                                {item.price && (
                                  <span className="text-green-600 font-semibold text-sm ml-2">{item.price}</span>
                                )}
                              </div>
                              {item.description && (
                                <p className="text-xs text-gray-600 mb-2 leading-relaxed">{item.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedMenuDropdown;