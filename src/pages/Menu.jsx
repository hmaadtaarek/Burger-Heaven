import React, { useState } from 'react';

const menuData = {
  burgers: [
    { id: 1, name: "Heavenly Classic", description: "A juicy, flame-grilled beef patty...", price: 9.99 },
    { id: 2, name: "Cheesy Bliss", description: "Double layers of cheddar cheese...", price: 10.99 },
    { id: 3, name: "Spicy Inferno", description: "Beef patty with jalapeños...", price: 10.99 },
    { id: 4, name: "Veggie Delight", description: "A garden veggie patty...", price: 9.49 }
  ],
  sides: [
    { id: 1, name: "Crispy Fries", description: "Golden, perfectly salted.", price: 3.49 },
    { id: 2, name: "Loaded Fries", description: "Topped with cheese, bacon...", price: 4.99 },
    { id: 3, name: "Onion Rings", description: "Crunchy and golden...", price: 4.29 }
  ],
  drinks: [
    { id: 1, name: "Soft Drinks", description: "Coke, Sprite, Fanta", price: 2.50 },
    { id: 2, name: "Milkshakes", description: "Chocolate, Vanilla, Strawberry", price: 4.99 },
    { id: 3, name: "Lemonade", description: "Freshly squeezed", price: 3.49 }
  ]
};

const Menu = () => {
  const [category, setCategory] = useState('burgers');

  return (
    <div className="bg-bgDark text-primaryText min-h-screen p-6">
      <h1 className="text-4xl text-center mb-6">Our Menu</h1>
      
      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(menuData).map(cat => (
          <button 
            key={cat} 
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg font-inter ${category === cat ? 'bg-parrotGreen text-bgDark' : 'bg-bgDark border-2 border-parrotGreen'}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData[category].map(item => (
          <div key={item.id} className="border border-parrotGreen p-4 rounded-lg">
            <h2 className="text-xl  mb-2">{item.name}</h2>
            <p className="text-secondaryText font-inter mb-4">{item.description}</p>
            <p className="text-lg font-inter">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
