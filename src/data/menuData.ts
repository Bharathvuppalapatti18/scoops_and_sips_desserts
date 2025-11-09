export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  isVegetarian?: boolean;
}

export interface MenuSubcategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  name: string;
  subcategories: MenuSubcategory[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'waffles',
    name: 'Waffles',
    subcategories: [
      {
        id: 'waffle-items',
        name: 'Waffles',
        items: [
          { id: 'banofee-waffle', name: 'Banofee Waffle', description: 'Fresh hot waffle topped with sliced banana pieces & drizzled with our toffee sauce', price: '£6.99'},
          { id: 'strawberry-waffle', name: 'Strawberry Waffle', description: 'resh hot waffle topped with sliced strawberry pieces & drizzled with our belgian milk chocolate sauce ', price: '£6.99'},
          { id: 'strawberry-banana-waffle', name: 'Strawberry & Banana Waffle', description: 'Fresh hot waffle topped with sliced banana pieces, sliced strawberry pieces & drizzled with our belgian milk chocolate sauce. ', price: '£7.25'},
          { id: 'oreo-cookie-waffle', name: 'Oreo Cookie Waffle', description: 'Fresh hot waffle topped with crushed oreo cookies & drizzled with our belgian milk and belgian white chocolate sauce. ', price: '£7.25'},
          { id: 'kinder-bueno-waffle', name: 'Kinder Bueno Waffle', description: 'resh hot waffle topped with sliced kinder bueno chocolate & drizzled with our belgian milk chocolate and belgian white chocolate sauce ', price: '£7.25' },
          { id: 'biscoff-waffle', name: 'Biscoff Waffle', description: 'Golden waffle topped with Lotus Biscoff spread, crushed biscuits, and vanilla ice cream', price: '£7.99', isVegetarian: true },
          { id: 'mixed-berry-waffle', name: 'Mixed Berry Waffle', description: 'Warm waffle topped with strawberries, blueberries, raspberries, and berry compote', price: '£7.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'luxury-crepes',
    name: 'Luxury Crepes',
    subcategories: [
      {
        id: 'crepe-items',
        name: 'Luxury Crepes',
        items: [
          { id: 'classic-crepe', name: 'Classic Crepe', description: 'Thin French crepe with lemon juice and sugar', price: '£5.49', isVegetarian: true },
          { id: 'nutella-crepe', name: 'Nutella Crepe', description: 'Delicate crepe filled with Nutella chocolate spread and sliced strawberries', price: '£6.99', isVegetarian: true },
          { id: 'banana-toffee-crepe', name: 'Banana Toffee Crepe', description: 'Soft crepe with caramelized bananas, toffee sauce, and whipped cream', price: '£7.49', isVegetarian: true },
          { id: 'strawberry-cream-crepe', name: 'Strawberry Cream Crepe', description: 'Light crepe filled with fresh strawberries and vanilla cream', price: '£7.49', isVegetarian: true },
          { id: 'kinder-bueno-crepe', name: 'Kinder Bueno Crepe', description: 'Luxurious crepe with Kinder Bueno pieces, chocolate sauce, and hazelnut ice cream', price: '£8.49', isVegetarian: true },
          { id: 'white-chocolate-raspberry-crepe', name: 'White Chocolate Raspberry Crepe', description: 'Elegant crepe with white chocolate sauce, fresh raspberries, and cream', price: '£7.99', isVegetarian: true },
          { id: 'ferrero-rocher-crepe', name: 'Ferrero Rocher Crepe', description: 'Premium crepe with Ferrero Rocher pieces, hazelnut spread, and chocolate drizzle', price: '£8.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'cookie-dough',
    name: 'Cookie Dough',
    subcategories: [
      {
        id: 'cookie-dough-items',
        name: 'Cookie Dough',
        items: [
          { id: 'chocolate-chip-cookie-dough', name: 'Chocolate Chip Cookie Dough', description: 'Warm chocolate chip cookie dough served with vanilla ice cream', price: '£6.99', isVegetarian: true },
          { id: 'double-chocolate-cookie-dough', name: 'Double Chocolate Cookie Dough', description: 'Rich chocolate cookie dough with white and milk chocolate chips', price: '£7.49', isVegetarian: true },
          { id: 'nutella-cookie-dough', name: 'Nutella Cookie Dough', description: 'Gooey cookie dough filled with Nutella and topped with hazelnut ice cream', price: '£7.99', isVegetarian: true },
          { id: 'oreo-cookie-dough', name: 'Oreo Cookie Dough', description: 'Cookie dough loaded with Oreo chunks, served with cookies & cream ice cream', price: '£7.99', isVegetarian: true },
          { id: 'brownie-cookie-dough', name: 'Brownie Cookie Dough', description: 'Warm cookie dough with brownie pieces, chocolate sauce, and vanilla ice cream', price: '£8.49', isVegetarian: true },
          { id: 'kinder-bueno-cookie-dough', name: 'Kinder Bueno Cookie Dough', description: 'Cookie dough with Kinder Bueno pieces, white chocolate sauce, and hazelnut ice cream', price: '£8.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'sundaes',
    name: 'Sundaes',
    subcategories: [
      {
        id: 'sundae-items',
        name: 'Sundaes',
        items: [
          { id: 'classic-vanilla-sundae', name: 'Classic Vanilla Sundae', description: 'Vanilla ice cream with chocolate sauce, whipped cream, and a cherry', price: '£4.99', isVegetarian: true },
          { id: 'chocolate-fudge-sundae', name: 'Chocolate Fudge Sundae', description: 'Chocolate ice cream with hot fudge sauce, brownie pieces, and whipped cream', price: '£6.49', isVegetarian: true },
          { id: 'strawberry-delight-sundae', name: 'Strawberry Delight Sundae', description: 'Strawberry ice cream with fresh strawberries, strawberry sauce, and cream', price: '£6.49', isVegetarian: true },
          { id: 'caramel-crunch-sundae', name: 'Caramel Crunch Sundae', description: 'Vanilla ice cream with caramel sauce, honeycomb pieces, and whipped cream', price: '£6.99', isVegetarian: true },
          { id: 'oreo-sundae', name: 'Oreo Sundae', description: 'Cookies & cream ice cream with crushed Oreos, chocolate sauce, and whipped cream', price: '£6.99', isVegetarian: true },
          { id: 'banana-split-sundae', name: 'Banana Split Sundae', description: 'Three scoops of ice cream with banana, chocolate sauce, strawberry sauce, and whipped cream', price: '£7.99', isVegetarian: true },
          { id: 'knickerbocker-glory', name: 'Knickerbocker Glory', description: 'Layers of ice cream, fruit, jelly, sauce, and whipped cream in a tall glass', price: '£8.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'candy-shakes',
    name: 'Candy Shakes',
    subcategories: [
      {
        id: 'candy-shake-items',
        name: 'Candy Shakes',
        items: [
          { id: 'maltesers-shake', name: 'Maltesers Shake', description: 'Creamy shake blended with Maltesers and topped with whipped cream', price: '£5.99', isVegetarian: true },
          { id: 'skittles-shake', name: 'Skittles Shake', description: 'Fruity shake loaded with Skittles candy and whipped cream topping', price: '£5.99', isVegetarian: true },
          { id: 'smarties-shake', name: 'Smarties Shake', description: 'Colorful shake with Smarties chocolate candies and cream', price: '£5.99', isVegetarian: true },
          { id: 'twix-shake', name: 'Twix Shake', description: 'Caramel and chocolate shake with Twix pieces and caramel drizzle', price: '£6.49', isVegetarian: true },
          { id: 'snickers-shake', name: 'Snickers Shake', description: 'Rich shake with Snickers bars, peanuts, and chocolate sauce', price: '£6.49', isVegetarian: true },
          { id: 'mars-shake', name: 'Mars Shake', description: 'Chocolate and caramel shake with Mars bar pieces', price: '£6.49', isVegetarian: true },
          { id: 'reeses-shake', name: "Reese's Peanut Butter Shake", description: 'Peanut butter shake with Reeses cups and chocolate drizzle', price: '£6.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'luxurious-milkshakes',
    name: 'Luxurious Milkshakes',
    subcategories: [
      {
        id: 'luxury-milkshake-items',
        name: 'Luxurious Milkshakes',
        items: [
          { id: 'lotus-biscoff-shake', name: 'Lotus Biscoff Shake', description: 'Creamy blend of Biscoff cookies and vanilla ice cream with biscuit crumble', price: '£6.49', isVegetarian: true },
          { id: 'kinder-bueno-shake', name: 'Kinder Bueno Shake', description: 'Luxurious shake with Kinder Bueno chocolate and hazelnut ice cream', price: '£6.99', isVegetarian: true },
          { id: 'ferrero-rocher-shake', name: 'Ferrero Rocher Shake', description: 'Premium shake with Ferrero Rocher and hazelnut chocolate sauce', price: '£7.49', isVegetarian: true },
          { id: 'oreo-shake', name: 'Oreo Shake', description: 'Classic shake with crushed Oreos and cookies & cream ice cream', price: '£5.99', isVegetarian: true },
          { id: 'nutella-shake', name: 'Nutella Shake', description: 'Rich chocolate hazelnut shake with Nutella and whipped cream', price: '£6.49', isVegetarian: true },
          { id: 'salted-caramel-shake', name: 'Salted Caramel Shake', description: 'Smooth caramel shake with sea salt and caramel ice cream', price: '£6.49', isVegetarian: true },
          { id: 'mint-chocolate-shake', name: 'Mint Chocolate Shake', description: 'Refreshing mint shake with chocolate chips and mint choc chip ice cream', price: '£6.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'custard-puddings',
    name: 'Custard Puddings',
    subcategories: [
      {
        id: 'custard-pudding-items',
        name: 'Custard Puddings',
        items: [
          { id: 'sticky-toffee-pudding', name: 'Sticky Toffee Pudding', description: 'Warm date sponge pudding with toffee sauce and vanilla custard', price: '£5.99', isVegetarian: true },
          { id: 'chocolate-fudge-pudding', name: 'Chocolate Fudge Pudding', description: 'Rich chocolate pudding with chocolate fudge sauce and custard', price: '£5.99', isVegetarian: true },
          { id: 'bread-butter-pudding', name: 'Bread & Butter Pudding', description: 'Traditional pudding with raisins served with warm vanilla custard', price: '£5.49', isVegetarian: true },
          { id: 'apple-crumble-custard', name: 'Apple Crumble with Custard', description: 'Warm apple crumble topped with buttery crumble and custard', price: '£5.99', isVegetarian: true },
          { id: 'jam-roly-poly', name: 'Jam Roly Poly', description: 'Classic steamed pudding with raspberry jam and custard', price: '£5.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'cheesecakes',
    name: 'Cheesecakes',
    subcategories: [
      {
        id: 'cheesecake-items',
        name: 'Cheesecakes',
        items: [
          { id: 'classic-vanilla-cheesecake', name: 'Classic Vanilla Cheesecake', description: 'Creamy vanilla cheesecake on a biscuit base with berry compote', price: '£5.99', isVegetarian: true },
          { id: 'strawberry-cheesecake', name: 'Strawberry Cheesecake', description: 'Rich cheesecake topped with fresh strawberries and strawberry sauce', price: '£6.49', isVegetarian: true },
          { id: 'biscoff-cheesecake', name: 'Biscoff Cheesecake', description: 'Lotus Biscoff cheesecake with biscuit base and caramel sauce', price: '£6.99', isVegetarian: true },
          { id: 'oreo-cheesecake', name: 'Oreo Cheesecake', description: 'Cookies & cream cheesecake with Oreo crust and chocolate drizzle', price: '£6.99', isVegetarian: true },
          { id: 'white-chocolate-raspberry-cheesecake', name: 'White Chocolate Raspberry Cheesecake', description: 'White chocolate cheesecake with raspberry swirl and fresh berries', price: '£7.49', isVegetarian: true },
          { id: 'salted-caramel-cheesecake', name: 'Salted Caramel Cheesecake', description: 'Smooth caramel cheesecake with salted caramel sauce', price: '£6.99', isVegetarian: true },
          { id: 'nutella-cheesecake', name: 'Nutella Cheesecake', description: 'Chocolate hazelnut cheesecake with Nutella swirl and hazelnut topping', price: '£7.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'cakes',
    name: 'Cakes',
    subcategories: [
      {
        id: 'cake-items',
        name: 'Cakes',
        items: [
          { id: 'chocolate-fudge-cake', name: 'Chocolate Fudge Cake', description: 'Rich chocolate cake with fudge frosting and chocolate curls', price: '£5.49', isVegetarian: true },
          { id: 'red-velvet-cake', name: 'Red Velvet Cake', description: 'Classic red velvet cake with cream cheese frosting', price: '£5.99', isVegetarian: true },
          { id: 'carrot-cake', name: 'Carrot Cake', description: 'Moist carrot cake with walnuts and cream cheese frosting', price: '£5.49', isVegetarian: true },
          { id: 'victoria-sponge', name: 'Victoria Sponge Cake', description: 'Light sponge cake with jam and buttercream filling', price: '£4.99', isVegetarian: true },
          { id: 'lemon-drizzle-cake', name: 'Lemon Drizzle Cake', description: 'Zesty lemon cake with sweet lemon glaze', price: '£4.99', isVegetarian: true },
          { id: 'cookies-cream-cake', name: 'Cookies & Cream Cake', description: 'Vanilla cake layered with Oreo cookies and cream frosting', price: '£6.49', isVegetarian: true },
          { id: 'lotus-biscoff-cake', name: 'Lotus Biscoff Cake', description: 'Caramel cake with Biscoff spread and biscuit pieces', price: '£6.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'pancakes',
    name: 'Pancakes',
    subcategories: [
      {
        id: 'pancake-items',
        name: 'Pancakes',
        items: [
          { id: 'classic-pancakes', name: 'Classic Pancakes', description: 'Fluffy American pancakes with maple syrup and butter', price: '£5.49', isVegetarian: true },
          { id: 'strawberry-pancakes', name: 'Strawberry Pancakes', description: 'Stack of pancakes with fresh strawberries and whipped cream', price: '£6.49', isVegetarian: true },
          { id: 'chocolate-chip-pancakes', name: 'Chocolate Chip Pancakes', description: 'Pancakes with chocolate chips and chocolate sauce', price: '£6.49', isVegetarian: true },
          { id: 'banana-nutella-pancakes', name: 'Banana Nutella Pancakes', description: 'Pancakes topped with sliced bananas and Nutella spread', price: '£6.99', isVegetarian: true },
          { id: 'blueberry-pancakes', name: 'Blueberry Pancakes', description: 'Pancakes with fresh blueberries and blueberry compote', price: '£6.49', isVegetarian: true },
          { id: 'oreo-pancakes', name: 'Oreo Pancakes', description: 'Pancakes with crushed Oreos, white chocolate sauce, and ice cream', price: '£7.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'matilda-cake',
    name: 'Matilda Cake',
    subcategories: [
      {
        id: 'matilda-cake-items',
        name: 'Matilda Cake',
        items: [
          { id: 'matilda-chocolate-cake', name: 'Matilda Chocolate Cake', description: 'Ultimate indulgent chocolate cake with layers of rich chocolate frosting', price: '£8.99', isVegetarian: true },
          { id: 'matilda-cake-with-ice-cream', name: 'Matilda Cake with Ice Cream', description: 'Decadent chocolate cake served warm with vanilla ice cream', price: '£9.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'chocolate-fondue',
    name: 'Chocolate Fondue',
    subcategories: [
      {
        id: 'fondue-items',
        name: 'Chocolate Fondue',
        items: [
          { id: 'milk-chocolate-fondue', name: 'Milk Chocolate Fondue', description: 'Warm milk chocolate fondue with fresh fruit and marshmallows', price: '£8.99', isVegetarian: true },
          { id: 'white-chocolate-fondue', name: 'White Chocolate Fondue', description: 'Smooth white chocolate fondue with strawberries and wafers', price: '£8.99', isVegetarian: true },
          { id: 'dark-chocolate-fondue', name: 'Dark Chocolate Fondue', description: 'Rich dark chocolate fondue with mixed berries and brownies', price: '£9.49', isVegetarian: true },
          { id: 'mixed-fondue-platter', name: 'Mixed Fondue Platter', description: 'Three chocolate fondues with fruit, cookies, and treats', price: '£12.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'brownies',
    name: 'Brownies',
    subcategories: [
      {
        id: 'brownie-items',
        name: 'Brownies',
        items: [
          { id: 'classic-chocolate-brownie', name: 'Classic Chocolate Brownie', description: 'Rich fudgy chocolate brownie served warm', price: '£4.49', isVegetarian: true },
          { id: 'brownie-with-ice-cream', name: 'Brownie with Ice Cream', description: 'Warm brownie with vanilla ice cream and chocolate sauce', price: '£5.99', isVegetarian: true },
          { id: 'nutella-brownie', name: 'Nutella Brownie', description: 'Chocolate brownie with Nutella swirl and hazelnut ice cream', price: '£6.49', isVegetarian: true },
          { id: 'oreo-brownie', name: 'Oreo Brownie', description: 'Fudgy brownie with Oreo pieces and cookies & cream ice cream', price: '£6.49', isVegetarian: true },
          { id: 'salted-caramel-brownie', name: 'Salted Caramel Brownie', description: 'Chocolate brownie with salted caramel sauce and ice cream', price: '£6.49', isVegetarian: true },
          { id: 'white-chocolate-brownie', name: 'White Chocolate Brownie', description: 'Blondie brownie with white chocolate chunks and raspberry sauce', price: '£5.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'fresh-chocolate-fruits',
    name: 'Fresh Chocolate Fruits',
    subcategories: [
      {
        id: 'chocolate-fruit-items',
        name: 'Fresh Chocolate Fruits',
        items: [
          { id: 'chocolate-strawberries', name: 'Chocolate Covered Strawberries', description: 'Fresh strawberries dipped in milk chocolate', price: '£5.99', isVegetarian: true },
          { id: 'white-chocolate-strawberries', name: 'White Chocolate Strawberries', description: 'Strawberries dipped in smooth white chocolate', price: '£5.99', isVegetarian: true },
          { id: 'mixed-chocolate-fruit-platter', name: 'Mixed Chocolate Fruit Platter', description: 'Assorted fresh fruits dipped in milk and white chocolate', price: '£8.99', isVegetarian: true },
          { id: 'chocolate-banana-bites', name: 'Chocolate Banana Bites', description: 'Banana slices dipped in chocolate with sprinkles', price: '£5.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'fresh-fruit-platters',
    name: 'Fresh Fruit Platters',
    subcategories: [
      {
        id: 'fruit-platter-items',
        name: 'Fresh Fruit Platters',
        items: [
          { id: 'seasonal-fruit-platter', name: 'Seasonal Fruit Platter', description: 'Selection of fresh seasonal fruits', price: '£6.99', isVegetarian: true },
          { id: 'tropical-fruit-platter', name: 'Tropical Fruit Platter', description: 'Exotic tropical fruits including mango, pineapple, and papaya', price: '£7.99', isVegetarian: true },
          { id: 'berry-platter', name: 'Berry Platter', description: 'Mixed berries with strawberries, blueberries, raspberries, and blackberries', price: '£7.49', isVegetarian: true },
          { id: 'fruit-salad-bowl', name: 'Fruit Salad Bowl', description: 'Fresh fruit salad with honey and mint', price: '£5.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'smoothies',
    name: 'Smoothies',
    subcategories: [
      {
        id: 'smoothie-items',
        name: 'Smoothies',
        items: [
          { id: 'strawberry-banana-smoothie', name: 'Strawberry Banana Smoothie', description: 'Blend of strawberries, banana, and yogurt', price: '£4.99', isVegetarian: true },
          { id: 'mango-passion-smoothie', name: 'Mango Passion Smoothie', description: 'Tropical blend of mango and passion fruit', price: '£5.49', isVegetarian: true },
          { id: 'berry-blast-smoothie', name: 'Berry Blast Smoothie', description: 'Mixed berries with apple juice and honey', price: '£5.49', isVegetarian: true },
          { id: 'green-goddess-smoothie', name: 'Green Goddess Smoothie', description: 'Spinach, banana, mango, and apple juice', price: '£5.99', isVegetarian: true },
          { id: 'peanut-butter-banana-smoothie', name: 'Peanut Butter Banana Smoothie', description: 'Banana, peanut butter, and milk blend', price: '£5.49', isVegetarian: true },
          { id: 'tropical-paradise-smoothie', name: 'Tropical Paradise Smoothie', description: 'Pineapple, mango, coconut, and banana', price: '£5.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'mocktails',
    name: 'Mocktails',
    subcategories: [
      {
        id: 'mocktail-items',
        name: 'Mocktails',
        items: [
          { id: 'virgin-mojito', name: 'Virgin Mojito', description: 'Fresh mint, lime, sugar, and soda water', price: '£4.49', isVegetarian: true },
          { id: 'strawberry-mojito', name: 'Strawberry Mojito', description: 'Strawberry twist on the classic mojito', price: '£4.99', isVegetarian: true },
          { id: 'passion-fruit-cooler', name: 'Passion Fruit Cooler', description: 'Passion fruit, orange juice, and lemonade', price: '£4.99', isVegetarian: true },
          { id: 'blue-lagoon-mocktail', name: 'Blue Lagoon Mocktail', description: 'Blue curacao syrup, lemonade, and lime', price: '£4.99', isVegetarian: true },
          { id: 'tropical-sunset', name: 'Tropical Sunset', description: 'Pineapple, orange, grenadine, and coconut', price: '£5.49', isVegetarian: true },
          { id: 'virgin-pina-colada', name: 'Virgin Pina Colada', description: 'Pineapple, coconut cream, and ice', price: '£5.49', isVegetarian: true },
          { id: 'berry-fizz', name: 'Berry Fizz', description: 'Mixed berries with lemonade and mint', price: '£4.99', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    subcategories: [
      {
        id: 'hot-drinks',
        name: 'Hot Drinks',
        items: [
          { id: 'espresso', name: 'Espresso', description: 'Rich Italian espresso', price: '£2.49', isVegetarian: true },
          { id: 'cappuccino', name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '£3.49', isVegetarian: true },
          { id: 'latte', name: 'Latte', description: 'Smooth espresso with steamed milk', price: '£3.49', isVegetarian: true },
          { id: 'mocha', name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '£3.99', isVegetarian: true },
          { id: 'hot-chocolate', name: 'Hot Chocolate', description: 'Rich chocolate drink with whipped cream', price: '£3.49', isVegetarian: true },
          { id: 'english-breakfast-tea', name: 'English Breakfast Tea', description: 'Classic black tea', price: '£2.49', isVegetarian: true },
          { id: 'green-tea', name: 'Green Tea', description: 'Light and refreshing green tea', price: '£2.49', isVegetarian: true },
          { id: 'herbal-tea', name: 'Herbal Tea', description: 'Selection of herbal teas', price: '£2.49', isVegetarian: true }
        ]
      },
      {
        id: 'cold-drinks',
        name: 'Cold Drinks',
        items: [
          { id: 'iced-coffee', name: 'Iced Coffee', description: 'Chilled coffee with ice and milk', price: '£3.99', isVegetarian: true },
          { id: 'iced-latte', name: 'Iced Latte', description: 'Cold espresso with milk over ice', price: '£3.99', isVegetarian: true },
          { id: 'frappe', name: 'Frappe', description: 'Blended iced coffee drink', price: '£4.49', isVegetarian: true },
          { id: 'fresh-orange-juice', name: 'Fresh Orange Juice', description: 'Freshly squeezed orange juice', price: '£3.99', isVegetarian: true },
          { id: 'lemonade', name: 'Lemonade', description: 'Fresh homemade lemonade', price: '£3.49', isVegetarian: true },
          { id: 'soft-drinks', name: 'Soft Drinks', description: 'Selection of canned soft drinks', price: '£2.49', isVegetarian: true },
          { id: 'bottled-water', name: 'Bottled Water', description: 'Still or sparkling water', price: '£1.99', isVegetarian: true }
        ]
      }
    ]
  }
];
