'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        "id": 1,
        "name": "Wireless Ergonomic Mouse",
        "description": "A comfortable wireless mouse designed for long hours of use.",
        "price": 45.99,
        "stock": 150,
        "category": "Electronics"
      },
      {
        "id": 2,
        "name": "Mechanical Keyboard",
        "description": "A high-quality mechanical keyboard with customizable RGB lighting.",
        "price": 129.50,
        "stock": 75,
        "category": "Electronics"
      },
      {
        "id": 3,
        "name": "4K Ultra HD Monitor",
        "description": "27-inch monitor with stunning 4K resolution and vibrant colors.",
        "price": 349.99,
        "stock": 90,
        "category": "Electronics"
      },
      {
        "id": 4,
        "name": "Noise-Cancelling Headphones",
        "description": "Over-ear headphones with superior audio quality and active noise cancellation.",
        "price": 279.00,
        "stock": 200,
        "category": "Electronics"
      },
      {
        "id": 5,
        "name": "Portable Bluetooth Speaker",
        "description": "Compact and powerful speaker, perfect for outdoor activities.",
        "price": 89.99,
        "stock": 120,
        "category": "Electronics"
      },
      {
        "id": 6,
        "name": "Smart Coffee Maker",
        "description": "Brew your coffee from your phone with this smart, programmable coffee machine.",
        "price": 75.00,
        "stock": 60,
        "category": "Home & Kitchen"
      },
      {
        "id": 7,
        "name": "Air Fryer 5-Liter",
        "description": "Cook crispy and healthy food with little to no oil.",
        "price": 99.99,
        "stock": 110,
        "category": "Home & Kitchen"
      },
      {
        "id": 8,
        "name": "Robotic Vacuum Cleaner",
        "description": "An intelligent vacuum cleaner that maps your home and cleans automatically.",
        "price": 299.00,
        "stock": 45,
        "category": "Home & Kitchen"
      },
      {
        "id": 9,
        "name": "Blender High-Power",
        "description": "Heavy-duty blender ideal for smoothies, soups, and crushing ice.",
        "price": 150.00,
        "stock": 85,
        "category": "Home & Kitchen"
      },
      {
        "id": 10,
        "name": "Digital Food Scale",
        "description": "A precise kitchen scale with a clear digital display.",
        "price": 25.50,
        "stock": 300,
        "category": "Home & Kitchen"
      },
      {
        "id": 11,
        "name": "The Lord of the Rings Trilogy",
        "description": "A classic fantasy book series by J.R.R. Tolkien.",
        "price": 35.00,
        "stock": 50,
        "category": "Books"
      },
      {
        "id": 12,
        "name": "Python Programming for Beginners",
        "description": "An introductory guide to learning Python with practical examples.",
        "price": 29.99,
        "stock": 180,
        "category": "Books"
      },
      {
        "id": 13,
        "name": "The Great Gatsby",
        "description": "A F. Scott Fitzgerald classic novel.",
        "price": 12.95,
        "stock": 100,
        "category": "Books"
      },
      {
        "id": 14,
        "name": "Gardening for Dummies",
        "description": "A comprehensive guide for amateur gardeners.",
        "price": 19.99,
        "stock": 70,
        "category": "Books"
      },
      {
        "id": 15,
        "name": "Art History: A Visual Guide",
        "description": "A beautifully illustrated book covering art history from ancient times to modern day.",
        "price": 55.00,
        "stock": 30,
        "category": "Books"
      },
      {
        "id": 16,
        "name": "Men's Casual T-Shirt",
        "description": "Soft cotton t-shirt in a classic fit. Available in multiple colors.",
        "price": 18.50,
        "stock": 500,
        "category": "Apparel"
      },
      {
        "id": 17,
        "name": "Women's Denim Jeans",
        "description": "High-waisted skinny jeans with a stretch fit.",
        "price": 49.99,
        "stock": 250,
        "category": "Apparel"
      },
      {
        "id": 18,
        "name": "Unisex Hoodie",
        "description": "A warm and comfortable hoodie with a front pocket.",
        "price": 45.00,
        "stock": 175,
        "category": "Apparel"
      },
      {
        "id": 19,
        "name": "Running Shoes",
        "description": "Lightweight and breathable shoes for running and training.",
        "price": 89.00,
        "stock": 95,
        "category": "Apparel"
      },
      {
        "id": 20,
        "name": "Winter Jacket",
        "description": "Insulated jacket to keep you warm in cold weather.",
        "price": 120.00,
        "stock": 40,
        "category": "Apparel"
      },
      {
        "id": 21,
        "name": "Laptop Backpack",
        "description": "Durable backpack with a padded compartment for laptops up to 15 inches.",
        "price": 65.00,
        "stock": 80,
        "category": "Electronics"
      },
      {
        "id": 22,
        "name": "HD Webcam",
        "description": "Full HD webcam with a built-in microphone for clear video calls.",
        "price": 59.99,
        "stock": 130,
        "category": "Electronics"
      },
      {
        "id": 23,
        "name": "Portable Power Bank",
        "description": "10000mAh power bank to charge your devices on the go.",
        "price": 29.99,
        "stock": 250,
        "category": "Electronics"
      },
      {
        "id": 24,
        "name": "Smart Doorbell",
        "description": "Wi-Fi enabled doorbell with motion detection and two-way audio.",
        "price": 149.00,
        "stock": 55,
        "category": "Electronics"
      },
      {
        "id": 25,
        "name": "LED Smart Bulb",
        "description": "Color-changing LED bulb that works with smart home assistants.",
        "price": 15.99,
        "stock": 400,
        "category": "Electronics"
      },
      {
        "id": 26,
        "name": "Stainless Steel Cookware Set",
        "description": "A 10-piece set of durable stainless steel pots and pans.",
        "price": 199.00,
        "stock": 35,
        "category": "Home & Kitchen"
      },
      {
        "id": 27,
        "name": "Digital Air Humidifier",
        "description": "Adds moisture to the air, helping to relieve dry skin and sinuses.",
        "price": 69.99,
        "stock": 70,
        "category": "Home & Kitchen"
      },
      {
        "id": 28,
        "name": "Memory Foam Pillow",
        "description": "Supportive pillow that conforms to your head and neck for a better sleep.",
        "price": 39.00,
        "stock": 180,
        "category": "Home & Kitchen"
      },
      {
        "id": 29,
        "name": "Electric Kettle",
        "description": "Boils water quickly and efficiently with an automatic shut-off feature.",
        "price": 32.50,
        "stock": 210,
        "category": "Home & Kitchen"
      },
      {
        "id": 30,
        "name": "Cast Iron Skillet",
        "description": "Pre-seasoned skillet for superior heat retention and even cooking.",
        "price": 49.99,
        "stock": 90,
        "category": "Home & Kitchen"
      },
      {
        "id": 31,
        "name": "Dune",
        "description": "The first novel in the epic science fiction series by Frank Herbert.",
        "price": 14.99,
        "stock": 120,
        "category": "Books"
      },
      {
        "id": 32,
        "name": "The Hitchhiker's Guide to the Galaxy",
        "description": "A comedic science fiction series by Douglas Adams.",
        "price": 10.50,
        "stock": 150,
        "category": "Books"
      },
      {
        "id": 33,
        "name": "Becoming",
        "description": "A memoir by former First Lady Michelle Obama.",
        "price": 28.00,
        "stock": 65,
        "category": "Books"
      },
      {
        "id": 34,
        "name": "1984",
        "description": "A dystopian social science fiction novel by George Orwell.",
        "price": 9.99,
        "stock": 200,
        "category": "Books"
      },
      {
        "id": 35,
        "name": "Sapiens: A Brief History of Humankind",
        "description": "A book that surveys the history of the human species.",
        "price": 22.00,
        "stock": 80,
        "category": "Books"
      },
      {
        "id": 36,
        "name": "Polo Shirt",
        "description": "A classic polo shirt made from breathable pique cotton.",
        "price": 28.00,
        "stock": 350,
        "category": "Apparel"
      },
      {
        "id": 37,
        "name": "Sweatpants",
        "description": "Soft and cozy fleece sweatpants with an elastic waistband.",
        "price": 35.99,
        "stock": 160,
        "category": "Apparel"
      },
      {
        "id": 38,
        "name": "Leather Belt",
        "description": "A genuine leather belt with a durable buckle.",
        "price": 24.50,
        "stock": 220,
        "category": "Apparel"
      },
      {
        "id": 39,
        "name": "Sneakers",
        "description": "Stylish and comfortable sneakers for everyday wear.",
        "price": 75.00,
        "stock": 105,
        "category": "Apparel"
      },
      {
        "id": 40,
        "name": "Lightweight Rain Jacket",
        "description": "A packable and water-resistant jacket for unexpected weather.",
        "price": 60.00,
        "stock": 50,
        "category": "Apparel"
      },
      {
        "id": 41,
        "name": "Smartwatch",
        "description": "Track your fitness, heart rate, and notifications with this sleek smartwatch.",
        "price": 199.00,
        "stock": 70,
        "category": "Electronics"
      },
      {
        "id": 42,
        "name": "Tablet 10-inch",
        "description": "A versatile tablet for entertainment, work, and creative tasks.",
        "price": 320.00,
        "stock": 60,
        "category": "Electronics"
      },
      {
        "id": 43,
        "name": "Mini Projector",
        "description": "Project movies and presentations anywhere with this compact device.",
        "price": 175.00,
        "stock": 40,
        "category": "Electronics"
      },
      {
        "id": 44,
        "name": "Gaming Headset",
        "description": "Immersive gaming headset with a sensitive microphone and surround sound.",
        "price": 85.00,
        "stock": 100,
        "category": "Electronics"
      },
      {
        "id": 45,
        "name": "E-Reader",
        "description": "Paper-like display for comfortable reading, even in bright sunlight.",
        "price": 119.00,
        "stock": 88,
        "category": "Electronics"
      },
      {
        "id": 46,
        "name": "Toaster Oven",
        "description": "A multi-functional toaster oven that can bake, broil, and toast.",
        "price": 59.00,
        "stock": 75,
        "category": "Home & Kitchen"
      },
      {
        "id": 47,
        "name": "Hand Mixer",
        "description": "Lightweight hand mixer with multiple speed settings for all your baking needs.",
        "price": 29.99,
        "stock": 190,
        "category": "Home & Kitchen"
      },
      {
        "id": 48,
        "name": "Aromatherapy Diffuser",
        "description": "Uses ultrasonic technology to disperse essential oils, creating a calming atmosphere.",
        "price": 42.00,
        "stock": 130,
        "category": "Home & Kitchen"
      },
      {
        "id": 49,
        "name": "Set of 4 Coffee Mugs",
        "description": "Durable ceramic mugs with a sleek, minimalist design.",
        "price": 19.99,
        "stock": 250,
        "category": "Home & Kitchen"
      },
      {
        "id": 50,
        "name": "Food Processor",
        "description": "Chop, shred, and mix ingredients effortlessly with this versatile machine.",
        "price": 110.00,
        "stock": 65,
        "category": "Home & Kitchen"
      },
      {
        "id": 51,
        "name": "The Alchemist",
        "description": "A philosophical novel by Brazilian author Paulo Coelho.",
        "price": 9.50,
        "stock": 300,
        "category": "Books"
      },
      {
        "id": 52,
        "name": "Where the Crawdads Sing",
        "description": "A novel by Delia Owens that combines a coming-of-age story with a murder mystery.",
        "price": 16.99,
        "stock": 90,
        "category": "Books"
      },
      {
        "id": 53,
        "name": "The Martian",
        "description": "A science fiction novel by Andy Weir.",
        "price": 13.00,
        "stock": 140,
        "category": "Books"
      },
      {
        "id": 54,
        "name": "The Silent Patient",
        "description": "A psychological thriller novel by Alex Michaelides.",
        "price": 11.99,
        "stock": 110,
        "category": "Books"
      },
      {
        "id": 55,
        "name": "Educated: A Memoir",
        "description": "A memoir by Tara Westover about her struggle for education.",
        "price": 20.50,
        "stock": 75,
        "category": "Books"
      },
      {
        "id": 56,
        "name": "Tank Top",
        "description": "A lightweight tank top, perfect for the gym or summer.",
        "price": 15.00,
        "stock": 400,
        "category": "Apparel"
      },
      {
        "id": 57,
        "name": "Dress Shirt",
        "description": "A formal dress shirt in a slim fit, suitable for professional settings.",
        "price": 55.00,
        "stock": 80,
        "category": "Apparel"
      },
      {
        "id": 58,
        "name": "Winter Scarf",
        "description": "A soft wool scarf to keep you warm and stylish.",
        "price": 22.00,
        "stock": 150,
        "category": "Apparel"
      },
      {
        "id": 59,
        "name": "Running Shorts",
        "description": "Moisture-wicking shorts with a secure pocket.",
        "price": 29.99,
        "stock": 210,
        "category": "Apparel"
      },
      {
        "id": 60,
        "name": "Hiking Boots",
        "description": "Waterproof boots with excellent traction for challenging trails.",
        "price": 130.00,
        "stock": 30,
        "category": "Apparel"
      },
      {
        "id": 61,
        "name": "Digital Camera",
        "description": "A compact camera with a 24MP sensor and 4K video recording.",
        "price": 450.00,
        "stock": 25,
        "category": "Electronics"
      },
      {
        "id": 62,
        "name": "Graphics Tablet",
        "description": "A professional drawing tablet for digital artists and designers.",
        "price": 199.00,
        "stock": 50,
        "category": "Electronics"
      },
      {
        "id": 63,
        "name": "Gaming Laptop",
        "description": "High-performance laptop with a powerful processor and dedicated graphics card.",
        "price": 1500.00,
        "stock": 20,
        "category": "Electronics"
      },
      {
        "id": 64,
        "name": "Smart Scale",
        "description": "Measure weight, BMI, body fat, and more with this smart scale.",
        "price": 49.99,
        "stock": 120,
        "category": "Electronics"
      },
      {
        "id": 65,
        "name": "Wireless Charging Pad",
        "description": "Fast wireless charging for compatible smartphones and devices.",
        "price": 35.00,
        "stock": 250,
        "category": "Electronics"
      },
      {
        "id": 66,
        "name": "Food Storage Containers",
        "description": "Set of 10 BPA-free containers for meal prep and leftovers.",
        "price": 29.00,
        "stock": 180,
        "category": "Home & Kitchen"
      },
      {
        "id": 67,
        "name": "Waffle Maker",
        "description": "Make perfect waffles every time with this non-stick waffle maker.",
        "price": 39.99,
        "stock": 95,
        "category": "Home & Kitchen"
      },
      {
        "id": 68,
        "name": "Digital Meat Thermometer",
        "description": "Instantly read the temperature of your food for perfect cooking results.",
        "price": 17.50,
        "stock": 210,
        "category": "Home & Kitchen"
      },
      {
        "id": 69,
        "name": "Cutting Board Set",
        "description": "Three different sizes of bamboo cutting boards.",
        "price": 24.99,
        "stock": 160,
        "category": "Home & Kitchen"
      },
      {
        "id": 70,
        "name": "Handheld Steamer",
        "description": "Remove wrinkles from clothes quickly and easily.",
        "price": 49.00,
        "stock": 70,
        "category": "Home & Kitchen"
      },
      {
        "id": 71,
        "name": "The Hunger Games",
        "description": "The first book in the dystopian trilogy by Suzanne Collins.",
        "price": 11.99,
        "stock": 130,
        "category": "Books"
      },
      {
        "id": 72,
        "name": "Harry Potter and the Sorcerer's Stone",
        "description": "The first book in the magical series by J.K. Rowling.",
        "price": 14.00,
        "stock": 180,
        "category": "Books"
      },
      {
        "id": 73,
        "name": "The Da Vinci Code",
        "description": "A mystery thriller novel by Dan Brown.",
        "price": 10.99,
        "stock": 95,
        "category": "Books"
      },
      {
        "id": 74,
        "name": "To Kill a Mockingbird",
        "description": "A classic novel by Harper Lee set in the American South.",
        "price": 8.99,
        "stock": 220,
        "category": "Books"
      },
      {
        "id": 75,
        "name": "Fahrenheit 451",
        "description": "A dystopian novel by Ray Bradbury about a future society where books are banned.",
        "price": 10.50,
        "stock": 105,
        "category": "Books"
      },
      {
        "id": 76,
        "name": "Formal Dress",
        "description": "Elegant evening dress with a flowy skirt.",
        "price": 95.00,
        "stock": 40,
        "category": "Apparel"
      },
      {
        "id": 77,
        "name": "Hooded Raincoat",
        "description": "A waterproof raincoat with a adjustable hood and zip closure.",
        "price": 70.00,
        "stock": 65,
        "category": "Apparel"
      },
      {
        "id": 78,
        "name": "Cargo Pants",
        "description": "Comfortable and practical pants with multiple pockets.",
        "price": 45.00,
        "stock": 110,
        "category": "Apparel"
      },
      {
        "id": 79,
        "name": "Winter Beanie",
        "description": "A warm, ribbed beanie for cold weather.",
        "price": 14.00,
        "stock": 250,
        "category": "Apparel"
      },
      {
        "id": 80,
        "name": "Workout Leggings",
        "description": "Stretchy and supportive leggings, ideal for yoga and gym workouts.",
        "price": 39.99,
        "stock": 175,
        "category": "Apparel"
      },
      {
        "id": 81,
        "name": "Smart Home Hub",
        "description": "Control all your smart home devices with a single hub.",
        "price": 89.00,
        "stock": 60,
        "category": "Electronics"
      },
      {
        "id": 82,
        "name": "Portable Monitor",
        "description": "A lightweight and thin external monitor for a dual-screen setup on the go.",
        "price": 180.00,
        "stock": 55,
        "category": "Electronics"
      },
      {
        "id": 83,
        "name": "Wireless Charger Stand",
        "description": "A charging stand that holds your phone upright for easy viewing.",
        "price": 25.00,
        "stock": 300,
        "category": "Electronics"
      },
      {
        "id": 84,
        "name": "Computer Speakers",
        "description": "Compact speakers with clear audio for your desktop.",
        "price": 49.00,
        "stock": 150,
        "category": "Electronics"
      },
      {
        "id": 85,
        "name": "Smart Plug",
        "description": "Control any appliance with your voice or smartphone.",
        "price": 12.99,
        "stock": 500,
        "category": "Electronics"
      },
      {
        "id": 86,
        "name": "Electric Griddle",
        "description": "Large cooking surface for pancakes, eggs, and more.",
        "price": 49.99,
        "stock": 80,
        "category": "Home & Kitchen"
      },
      {
        "id": 87,
        "name": "Espresso Machine",
        "description": "Make barista-quality espresso at home with this sleek machine.",
        "price": 220.00,
        "stock": 30,
        "category": "Home & Kitchen"
      },
      {
        "id": 88,
        "name": "Slow Cooker",
        "description": "Prepare delicious meals with minimal effort by letting this slow cooker do the work.",
        "price": 65.00,
        "stock": 90,
        "category": "Home & Kitchen"
      },
      {
        "id": 89,
        "name": "Grill Pan",
        "description": "Non-stick grill pan for indoor grilling, with a ridged surface.",
        "price": 35.00,
        "stock": 120,
        "category": "Home & Kitchen"
      },
      {
        "id": 90,
        "name": "Juicer",
        "description": "Extract fresh juice from fruits and vegetables with this powerful juicer.",
        "price": 88.00,
        "stock": 55,
        "category": "Home & Kitchen"
      },
      {
        "id": 91,
        "name": "Gone Girl",
        "description": "A thriller novel by Gillian Flynn.",
        "price": 15.99,
        "stock": 100,
        "category": "Books"
      },
      {
        "id": 92,
        "name": "The Girl with the Dragon Tattoo",
        "description": "A crime novel by Swedish author Stieg Larsson.",
        "price": 12.50,
        "stock": 115,
        "category": "Books"
      },
      {
        "id": 93,
        "name": "The Help",
        "description": "A novel by Kathryn Stockett about African American maids in the 1960s.",
        "price": 17.00,
        "stock": 80,
        "category": "Books"
      },
      {
        "id": 94,
        "name": "Life of Pi",
        "description": "A fantasy adventure novel by Yann Martel.",
        "price": 11.00,
        "stock": 150,
        "category": "Books"
      },
      {
        "id": 95,
        "name": "The Catcher in the Rye",
        "description": "A classic coming-of-age novel by J.D. Salinger.",
        "price": 9.99,
        "stock": 200,
        "category": "Books"
      },
      {
        "id": 96,
        "name": "Sweatshirt",
        "description": "A comfortable fleece sweatshirt with a crewneck design.",
        "price": 38.00,
        "stock": 190,
        "category": "Apparel"
      },
      {
        "id": 97,
        "name": "Windbreaker",
        "description": "A lightweight, wind-resistant jacket for outdoor activities.",
        "price": 55.00,
        "stock": 70,
        "category": "Apparel"
      },
      {
        "id": 98,
        "name": "Sandals",
        "description": "Casual and comfortable sandals for summer.",
        "price": 25.00,
        "stock": 250,
        "category": "Apparel"
      },
      {
        "id": 99,
        "name": "Pajama Set",
        "description": "A two-piece pajama set made from soft, breathable fabric.",
        "price": 40.00,
        "stock": 140,
        "category": "Apparel"
      },
      {
        "id": 100,
        "name": "Running Tights",
        "description": "Compression tights for running and high-intensity workouts.",
        "price": 59.00,
        "stock": 90,
        "category": "Apparel"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
