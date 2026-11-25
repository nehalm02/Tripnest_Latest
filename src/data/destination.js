const destinations = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    bestMonth: "April - June",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
      name: "Eiffel Tower",
      image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Louvre Museum",
        image:
          "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Arc de Triomphe",
        image:
          "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: ["Croissants", "French Crepes", "Macarons", "Baguette"],

    shopping: ["Champs-Élysées", "Galeries Lafayette", "Le Marais"],

    history:
      "Paris is the capital of France and one of the world's most famous centers of art, fashion, culture and history.",

    activities: [
      "Eiffel Tower Visit",
      "Museum Tour",
      "Seine River Cruise",
      "City Walking Tour",
    ],

    hotels: [
      {
        name: "Paris Central Hotel",
        price: "₹15,000 / night",
      },
      {
        name: "Eiffel View Hotel",
        price: "₹25,000 / night",
      },
    ],

    packages: [
      {
        name: "Classic Paris",
        duration: "4 Nights / 5 Days",
        price: "₹65,999",
      },
      {
        name: "Luxury Paris",
        duration: "6 Nights / 7 Days",
        price: "₹99,999",
      },
    ],
  },

  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    bestMonth: "November - March",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Burj Khalifa",
        image:
          "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Palm Jumeirah",
        image:
          "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dubai Marina",
        image:
          "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: ["Shawarma", "Falafel", "Machboos", "Al Harees"],

    shopping: [
      "Dubai Mall",
      "Gold Souk",
      "Mall of the Emirates",
    ],

    history:
      "Dubai transformed from a small trading settlement into a major global tourism and business destination.",

    activities: [
      "Desert Safari",
      "Dune Bashing",
      "Dhow Cruise",
      "Skydiving",
    ],

    hotels: [
      {
        name: "Dubai City Hotel",
        price: "₹10,000 / night",
      },
      {
        name: "Palm Luxury Resort",
        price: "₹30,000 / night",
      },
    ],

    packages: [
      {
        name: "Dubai Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹35,999",
      },
      {
        name: "Dubai Luxury",
        duration: "6 Nights / 7 Days",
        price: "₹69,999",
      },
    ],
  },

  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    bestMonth: "April - October",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Uluwatu Temple",
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Tanah Lot",
        image:
          "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Ubud",
        image:
          "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Seminyak",
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mount Batur",
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Nasi Goreng",
      "Mie Goreng",
      "Satay",
      "Babi Guling",
    ],

    shopping: [
      "Ubud Art Market",
      "Kuta Market",
      "Seminyak Village",
    ],

    history:
      "Bali is an Indonesian island famous for its beautiful beaches, temples, Hindu culture, traditional arts, rice terraces and natural landscapes.",

    activities: [
      "Surfing",
      "Snorkeling",
      "Scuba Diving",
      "Temple Visits",
      "Mount Batur Trekking",
    ],

    hotels: [
      {
        name: "Bali Beach Resort",
        price: "₹8,000 / night",
      },
      {
        name: "Ubud Luxury Villa",
        price: "₹12,000 / night",
      },
      {
        name: "Seminyak Resort",
        price: "₹15,000 / night",
      },
    ],

    packages: [
      {
        name: "Bali Explorer",
        duration: "3 Nights / 4 Days",
        price: "₹25,999",
      },
      {
        name: "Bali Premium",
        duration: "5 Nights / 6 Days",
        price: "₹49,999",
      },
      {
        name: "Bali Luxury",
        duration: "7 Nights / 8 Days",
        price: "₹79,999",
      },
    ],
  },

  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    bestMonth: "March - May",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Tokyo Tower",
        image:
          "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Shibuya Crossing",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Senso-ji Temple",
        image:
          "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: ["Sushi", "Ramen", "Tempura", "Takoyaki"],

    shopping: ["Shibuya", "Akihabara", "Ginza"],

    history:
      "Tokyo is Japan's capital and a major center of Japanese culture, technology, business and entertainment.",

    activities: [
      "Temple Visits",
      "Anime Shopping",
      "Mount Fuji Trip",
      "City Tour",
    ],

    hotels: [
      {
        name: "Tokyo Central Hotel",
        price: "₹12,000 / night",
      },
      {
        name: "Tokyo Premium Hotel",
        price: "₹22,000 / night",
      },
    ],

    packages: [
      {
        name: "Tokyo Explorer",
        duration: "5 Nights / 6 Days",
        price: "₹75,999",
      },
      {
        name: "Japan Premium",
        duration: "7 Nights / 8 Days",
        price: "₹1,19,999",
      },
    ],
  },

  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    bestMonth: "November - April",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Malé",
        image:
          "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maafushi",
        image:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hulhumale",
        image:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Mas Huni",
      "Fish Curry",
      "Garudhiya",
      "Maldivian Snacks",
    ],

    shopping: [
      "Malé Local Market",
      "Majeedhee Magu",
      "Island Souvenir Shops",
    ],

    history:
      "The Maldives is an island nation famous for its coral islands, beaches, marine life and luxury resorts.",

    activities: [
      "Snorkeling",
      "Scuba Diving",
      "Island Hopping",
      "Water Sports",
    ],

    hotels: [
      {
        name: "Maldives Island Resort",
        price: "₹18,000 / night",
      },
      {
        name: "Ocean Villa",
        price: "₹35,000 / night",
      },
    ],

    packages: [
      {
        name: "Maldives Escape",
        duration: "4 Nights / 5 Days",
        price: "₹45,999",
      },
      {
        name: "Maldives Luxury",
        duration: "6 Nights / 7 Days",
        price: "₹89,999",
      },
    ],
  },

  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    bestMonth: "May - September",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Big Ben",
        image:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "London Eye",
        image:
          "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Tower Bridge",
        image:
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Fish and Chips",
      "English Breakfast",
      "Pie",
      "Afternoon Tea",
    ],

    shopping: [
      "Oxford Street",
      "Camden Market",
      "Harrods",
    ],

    history:
      "London is the capital of the United Kingdom and has a rich political, cultural and economic history.",

    activities: [
      "London Eye",
      "Museum Tour",
      "Thames Cruise",
      "Royal Palace Tour",
    ],

    hotels: [
      {
        name: "London Central Hotel",
        price: "₹18,000 / night",
      },
      {
        name: "London Luxury Hotel",
        price: "₹30,000 / night",
      },
    ],

    packages: [
      {
        name: "London Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹70,999",
      },
      {
        name: "London Premium",
        duration: "6 Nights / 7 Days",
        price: "₹1,09,999",
      },
    ],
  },

  {
    id: "new-york",
    name: "New York",
    country: "USA",
    bestMonth: "April - June",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Times Square",
        image:
          "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Statue of Liberty",
        image:
          "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Central Park",
        image:
          "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "New York Pizza",
      "Bagels",
      "Cheesecake",
      "Hot Dogs",
    ],

    shopping: [
      "Fifth Avenue",
      "SoHo",
      "Times Square",
    ],

    history:
      "New York City is one of the world's major cultural, financial and entertainment centers.",

    activities: [
      "Statue of Liberty Tour",
      "Broadway Show",
      "Central Park Visit",
      "City Sightseeing",
    ],

    hotels: [
      {
        name: "Manhattan Hotel",
        price: "₹20,000 / night",
      },
      {
        name: "Times Square Hotel",
        price: "₹28,000 / night",
      },
    ],

    packages: [
      {
        name: "New York Explorer",
        duration: "5 Nights / 6 Days",
        price: "₹95,999",
      },
      {
        name: "New York Premium",
        duration: "7 Nights / 8 Days",
        price: "₹1,39,999",
      },
    ],
  },

  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    bestMonth: "April - June",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Colosseum",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Trevi Fountain",
        image:
          "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Vatican City",
        image:
          "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Pizza",
      "Pasta",
      "Gelato",
      "Tiramisu",
    ],

    shopping: [
      "Via del Corso",
      "Spanish Steps",
      "Campo de' Fiori",
    ],

    history:
      "Rome is the capital of Italy and was the center of the ancient Roman Empire.",

    activities: [
      "Colosseum Tour",
      "Vatican Tour",
      "Food Tour",
      "Historic Walking Tour",
    ],

    hotels: [
      {
        name: "Rome Central Hotel",
        price: "₹14,000 / night",
      },
      {
        name: "Luxury Rome Hotel",
        price: "₹25,000 / night",
      },
    ],

    packages: [
      {
        name: "Rome Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹65,999",
      },
      {
        name: "Italy Premium",
        duration: "7 Nights / 8 Days",
        price: "₹1,05,999",
      },
    ],
  },

  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    bestMonth: "May - October",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Oia",
        image:
          "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Fira",
        image:
          "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Red Beach",
        image:
          "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Moussaka",
      "Greek Salad",
      "Souvlaki",
      "Baklava",
    ],

    shopping: [
      "Fira Market",
      "Oia Shops",
      "Santorini Boutiques",
    ],

    history:
      "Santorini is a Greek island famous for its whitewashed villages, blue domes, volcanic landscape and spectacular sunsets.",

    activities: [
      "Sunset Watching",
      "Boat Cruise",
      "Volcano Tour",
      "Beach Visit",
    ],

    hotels: [
      {
        name: "Santorini Sea View Hotel",
        price: "₹22,000 / night",
      },
      {
        name: "Oia Luxury Villa",
        price: "₹40,000 / night",
      },
    ],

    packages: [
      {
        name: "Santorini Escape",
        duration: "4 Nights / 5 Days",
        price: "₹75,999",
      },
      {
        name: "Santorini Luxury",
        duration: "6 Nights / 7 Days",
        price: "₹1,19,999",
      },
    ],
  },

  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    bestMonth: "May - June",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Sagrada Familia",
        image:
          "https://images.unsplash.com/photo-1583779457094-ab6f7d6a0a5f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Park Güell",
        image:
          "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Gothic Quarter",
        image:
          "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Paella",
      "Tapas",
      "Churros",
      "Crema Catalana",
    ],

    shopping: [
      "La Rambla",
      "Passeig de Gràcia",
      "Boqueria Market",
    ],

    history:
      "Barcelona is a major Spanish city known for its architecture, art, Mediterranean beaches and Catalan culture.",

    activities: [
      "Gaudí Architecture Tour",
      "Beach Visit",
      "Food Tour",
      "City Walking Tour",
    ],

    hotels: [
      {
        name: "Barcelona Central Hotel",
        price: "₹15,000 / night",
      },
      {
        name: "Beachfront Barcelona Hotel",
        price: "₹25,000 / night",
      },
    ],

    packages: [
      {
        name: "Barcelona Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹69,999",
      },
      {
        name: "Spain Premium",
        duration: "6 Nights / 7 Days",
        price: "₹1,09,999",
      },
    ],
  },

  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    bestMonth: "April - May",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Canal Ring",
        image:
          "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Rijksmuseum",
        image:
          "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Jordaan",
        image:
          "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Stroopwafel",
      "Dutch Pancakes",
      "Bitterballen",
      "Herring",
    ],

    shopping: [
      "Kalverstraat",
      "Nine Streets",
      "Albert Cuyp Market",
    ],

    history:
      "Amsterdam is the capital of the Netherlands and is famous for its canals, museums, historic buildings and cycling culture.",

    activities: [
      "Canal Cruise",
      "Museum Tour",
      "Bike Tour",
      "City Walk",
    ],

    hotels: [
      {
        name: "Amsterdam Central Hotel",
        price: "₹17,000 / night",
      },
      {
        name: "Canal View Hotel",
        price: "₹26,000 / night",
      },
    ],

    packages: [
      {
        name: "Amsterdam Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹72,999",
      },
      {
        name: "Netherlands Premium",
        duration: "6 Nights / 7 Days",
        price: "₹1,09,999",
      },
    ],
  },

  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    bestMonth: "April - May",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Hagia Sophia",
        image:
          "https://images.unsplash.com/photo-1565107665316-8736a1d3b6e3?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Blue Mosque",
        image:
          "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Grand Bazaar",
        image:
          "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Kebab",
      "Baklava",
      "Turkish Delight",
      "Menemen",
    ],

    shopping: [
      "Grand Bazaar",
      "Spice Bazaar",
      "Istiklal Street",
    ],

    history:
      "Istanbul is a historic city located between Europe and Asia and was once the capital of the Byzantine and Ottoman Empires.",

    activities: [
      "Bosphorus Cruise",
      "Mosque Tour",
      "Bazaar Shopping",
      "Food Tour",
    ],

    hotels: [
      {
        name: "Istanbul Central Hotel",
        price: "₹10,000 / night",
      },
      {
        name: "Bosphorus View Hotel",
        price: "₹20,000 / night",
      },
    ],

    packages: [
      {
        name: "Istanbul Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹45,999",
      },
      {
        name: "Turkey Premium",
        duration: "7 Nights / 8 Days",
        price: "₹79,999",
      },
    ],
  },

  {
    id: "prague",
    name: "Prague",
    country: "Czech Republic",
    bestMonth: "May - September",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Prague Castle",
        image:
          "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Charles Bridge",
        image:
          "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Old Town Square",
        image:
          "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Goulash",
      "Trdelník",
      "Svíčková",
      "Czech Dumplings",
    ],

    shopping: [
      "Old Town",
      "Wenceslas Square",
      "Palladium",
    ],

    history:
      "Prague is the capital of the Czech Republic and is known for its medieval architecture, castles and historic Old Town.",

    activities: [
      "Castle Tour",
      "River Cruise",
      "Old Town Walk",
      "Food Tour",
    ],

    hotels: [
      {
        name: "Prague Central Hotel",
        price: "₹9,000 / night",
      },
      {
        name: "Old Town Luxury Hotel",
        price: "₹17,000 / night",
      },
    ],

    packages: [
      {
        name: "Prague Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹49,999",
      },
      {
        name: "Czech Premium",
        duration: "6 Nights / 7 Days",
        price: "₹75,999",
      },
    ],
  },

  {
    id: "vienna",
    name: "Vienna",
    country: "Austria",
    bestMonth: "April - October",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Schönbrunn Palace",
        image:
          "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "St. Stephen's Cathedral",
        image:
          "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Belvedere Palace",
        image:
          "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Wiener Schnitzel",
      "Sachertorte",
      "Apfelstrudel",
      "Viennese Coffee",
    ],

    shopping: [
      "Mariahilfer Straße",
      "Kärntner Straße",
      "Naschmarkt",
    ],

    history:
      "Vienna is Austria's capital and has been an important center of European music, art, politics and culture for centuries.",

    activities: [
      "Palace Tour",
      "Classical Concert",
      "Museum Visit",
      "City Walk",
    ],

    hotels: [
      {
        name: "Vienna Central Hotel",
        price: "₹13,000 / night",
      },
      {
        name: "Vienna Palace Hotel",
        price: "₹24,000 / night",
      },
    ],

    packages: [
      {
        name: "Vienna Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹59,999",
      },
      {
        name: "Austria Premium",
        duration: "7 Nights / 8 Days",
        price: "₹99,999",
      },
    ],
  },

  {
    id: "venice",
    name: "Venice",
    country: "Italy",
    bestMonth: "April - June",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Grand Canal",
        image:
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "St. Mark's Square",
        image:
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Rialto Bridge",
        image:
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Risotto",
      "Cicchetti",
      "Tiramisu",
      "Seafood Pasta",
    ],

    shopping: [
      "Rialto Market",
      "Mercerie",
      "Venetian Glass Shops",
    ],

    history:
      "Venice is an Italian city built across a group of islands and is famous for its canals, bridges, art and historic architecture.",

    activities: [
      "Gondola Ride",
      "Canal Cruise",
      "Museum Visit",
      "Walking Tour",
    ],

    hotels: [
      {
        name: "Venice Central Hotel",
        price: "₹18,000 / night",
      },
      {
        name: "Canal View Hotel",
        price: "₹30,000 / night",
      },
    ],

    packages: [
      {
        name: "Venice Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹69,999",
      },
      {
        name: "Italy Luxury",
        duration: "7 Nights / 8 Days",
        price: "₹1,09,999",
      },
    ],
  },

  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    bestMonth: "March - May",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Belém Tower",
        image:
          "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Alfama",
        image:
          "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "São Jorge Castle",
        image:
          "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Pastéis de Nata",
      "Bacalhau",
      "Francesinha",
      "Grilled Sardines",
    ],

    shopping: [
      "Chiado",
      "Baixa",
      "Time Out Market",
    ],

    history:
      "Lisbon is Portugal's capital and one of Europe's oldest cities, known for its colorful neighborhoods, historic trams and coastal views.",

    activities: [
      "Tram Ride",
      "Castle Tour",
      "River Cruise",
      "Food Tour",
    ],

    hotels: [
      {
        name: "Lisbon Central Hotel",
        price: "₹11,000 / night",
      },
      {
        name: "Lisbon Luxury Hotel",
        price: "₹20,000 / night",
      },
    ],

    packages: [
      {
        name: "Lisbon Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹55,999",
      },
      {
        name: "Portugal Premium",
        duration: "6 Nights / 7 Days",
        price: "₹89,999",
      },
    ],
  },

  {
    id: "reykjavik",
    name: "Reykjavik",
    country: "Iceland",
    bestMonth: "June - August",
    image:
      "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Blue Lagoon",
        image:
          "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hallgrímskirkja",
        image:
          "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Golden Circle",
        image:
          "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Icelandic Lamb",
      "Skyr",
      "Plokkfiskur",
      "Rye Bread",
    ],

    shopping: [
      "Laugavegur",
      "Kolaportið Market",
      "Kringlan",
    ],

    history:
      "Reykjavik is Iceland's capital and a gateway to the country's volcanoes, glaciers, waterfalls and geothermal landscapes.",

    activities: [
      "Northern Lights Tour",
      "Blue Lagoon",
      "Golden Circle Tour",
      "Whale Watching",
    ],

    hotels: [
      {
        name: "Reykjavik Central Hotel",
        price: "₹18,000 / night",
      },
      {
        name: "Iceland Luxury Hotel",
        price: "₹30,000 / night",
      },
    ],

    packages: [
      {
        name: "Iceland Explorer",
        duration: "5 Nights / 6 Days",
        price: "₹95,999",
      },
      {
        name: "Iceland Premium",
        duration: "7 Nights / 8 Days",
        price: "₹1,39,999",
      },
    ],
  },

  {
    id: "cairo",
    name: "Cairo",
    country: "Egypt",
    bestMonth: "October - April",
    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Pyramids of Giza",
        image:
          "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Sphinx",
        image:
          "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Egyptian Museum",
        image:
          "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Koshari",
      "Ful Medames",
      "Falafel",
      "Molokhia",
    ],

    shopping: [
      "Khan el-Khalili",
      "City Stars",
      "Downtown Cairo",
    ],

    history:
      "Cairo is Egypt's capital and is closely associated with the ancient pyramids and thousands of years of Egyptian history.",

    activities: [
      "Pyramid Tour",
      "Nile Cruise",
      "Museum Tour",
      "Desert Trip",
    ],

    hotels: [
      {
        name: "Cairo Central Hotel",
        price: "₹8,000 / night",
      },
      {
        name: "Nile View Hotel",
        price: "₹18,000 / night",
      },
    ],

    packages: [
      {
        name: "Egypt Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹45,999",
      },
      {
        name: "Egypt Premium",
        duration: "7 Nights / 8 Days",
        price: "₹79,999",
      },
    ],
  },

  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    bestMonth: "November - March",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Table Mountain",
        image:
          "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Cape Point",
        image:
          "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "V&A Waterfront",
        image:
          "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Bobotie",
      "Biltong",
      "Malva Pudding",
      "Braai",
    ],

    shopping: [
      "V&A Waterfront",
      "Greenmarket Square",
      "Long Street",
    ],

    history:
      "Cape Town is a major South African city known for Table Mountain, coastal scenery, diverse cultures and history.",

    activities: [
      "Table Mountain",
      "Whale Watching",
      "Safari",
      "Beach Visit",
    ],

    hotels: [
      {
        name: "Cape Town Central Hotel",
        price: "₹10,000 / night",
      },
      {
        name: "Waterfront Luxury Hotel",
        price: "₹22,000 / night",
      },
    ],

    packages: [
      {
        name: "Cape Town Explorer",
        duration: "5 Nights / 6 Days",
        price: "₹69,999",
      },
      {
        name: "South Africa Premium",
        duration: "8 Nights / 9 Days",
        price: "₹1,19,999",
      },
    ],
  },

  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    bestMonth: "February - April",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Marina Bay Sands",
        image:
          "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Gardens by the Bay",
        image:
          "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Sentosa Island",
        image:
          "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Hainanese Chicken Rice",
      "Laksa",
      "Chilli Crab",
      "Satay",
    ],

    shopping: [
      "Orchard Road",
      "Bugis Street",
      "VivoCity",
    ],

    history:
      "Singapore is a modern city-state known for its multicultural heritage, clean streets, advanced infrastructure and major attractions.",

    activities: [
      "Gardens by the Bay",
      "Universal Studios",
      "Night Safari",
      "Sentosa Visit",
    ],

    hotels: [
      {
        name: "Singapore City Hotel",
        price: "₹12,000 / night",
      },
      {
        name: "Marina Bay Hotel",
        price: "₹28,000 / night",
      },
    ],

    packages: [
      {
        name: "Singapore Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹45,999",
      },
      {
        name: "Singapore Premium",
        duration: "6 Nights / 7 Days",
        price: "₹75,999",
      },
    ],
  },

  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    bestMonth: "November - February",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Grand Palace",
        image:
          "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Wat Arun",
        image:
          "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Chatuchak Market",
        image:
          "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Pad Thai",
      "Tom Yum",
      "Green Curry",
      "Mango Sticky Rice",
    ],

    shopping: [
      "Chatuchak Market",
      "MBK Center",
      "Siam Paragon",
    ],

    history:
      "Bangkok is Thailand's capital and a major Southeast Asian destination known for temples, markets, food and nightlife.",

    activities: [
      "Temple Tour",
      "River Cruise",
      "Street Food Tour",
      "Market Shopping",
    ],

    hotels: [
      {
        name: "Bangkok Central Hotel",
        price: "₹6,000 / night",
      },
      {
        name: "Bangkok Luxury Hotel",
        price: "₹15,000 / night",
      },
    ],

    packages: [
      {
        name: "Bangkok Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹29,999",
      },
      {
        name: "Thailand Premium",
        duration: "6 Nights / 7 Days",
        price: "₹55,999",
      },
    ],
  },

  {
    id: "phuket",
    name: "Phuket",
    country: "Thailand",
    bestMonth: "November - April",
    image:
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Patong Beach",
        image:
          "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Big Buddha",
        image:
          "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Phi Phi Islands",
        image:
          "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Tom Yum",
      "Pad Thai",
      "Green Curry",
      "Mango Sticky Rice",
    ],

    shopping: [
      "Phuket Old Town",
      "Jungceylon",
      "Weekend Market",
    ],

    history:
      "Phuket is Thailand's largest island and is famous for beaches, islands, marine activities and tropical scenery.",

    activities: [
      "Island Hopping",
      "Snorkeling",
      "Scuba Diving",
      "Beach Activities",
    ],

    hotels: [
      {
        name: "Phuket Beach Resort",
        price: "₹8,000 / night",
      },
      {
        name: "Phuket Luxury Resort",
        price: "₹18,000 / night",
      },
    ],

    packages: [
      {
        name: "Phuket Escape",
        duration: "4 Nights / 5 Days",
        price: "₹35,999",
      },
      {
        name: "Phuket Luxury",
        duration: "6 Nights / 7 Days",
        price: "₹65,999",
      },
    ],
  },

  {
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    bestMonth: "April - May",
    image:
      "https://images.unsplash.com/photo-1538485399081-7c897b8d1c5f?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Gyeongbokgung Palace",
        image:
          "https://images.unsplash.com/photo-1538485399081-7c897b8d1c5f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "N Seoul Tower",
        image:
          "https://images.unsplash.com/photo-1538485399081-7c897b8d1c5f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Bukchon Hanok Village",
        image:
          "https://images.unsplash.com/photo-1538485399081-7c897b8d1c5f?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Bibimbap",
      "Korean BBQ",
      "Tteokbokki",
      "Kimchi",
    ],

    shopping: [
      "Myeongdong",
      "Hongdae",
      "Dongdaemun",
    ],

    history:
      "Seoul is South Korea's capital and combines ancient palaces and traditional neighborhoods with modern technology and pop culture.",

    activities: [
      "Palace Tour",
      "K-Pop Experience",
      "Hanbok Experience",
      "City Tour",
    ],

    hotels: [
      {
        name: "Seoul Central Hotel",
        price: "₹10,000 / night",
      },
      {
        name: "Seoul Premium Hotel",
        price: "₹20,000 / night",
      },
    ],

    packages: [
      {
        name: "Seoul Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹55,999",
      },
      {
        name: "Korea Premium",
        duration: "6 Nights / 7 Days",
        price: "₹85,999",
      },
    ],
  },

  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    bestMonth: "September - November",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d1?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Sydney Opera House",
        image:
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d1?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Bondi Beach",
        image:
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d1?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Harbour Bridge",
        image:
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d1?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Meat Pie",
      "Fish and Chips",
      "Pavlova",
      "Lamington",
    ],

    shopping: [
      "Queen Victoria Building",
      "Pitt Street Mall",
      "The Rocks",
    ],

    history:
      "Sydney is Australia's oldest major city and is famous for its harbour, beaches, Opera House and multicultural population.",

    activities: [
      "Harbour Cruise",
      "Surfing",
      "Opera House Tour",
      "Wildlife Tour",
    ],

    hotels: [
      {
        name: "Sydney Central Hotel",
        price: "₹15,000 / night",
      },
      {
        name: "Harbour View Hotel",
        price: "₹28,000 / night",
      },
    ],

    packages: [
      {
        name: "Sydney Explorer",
        duration: "5 Nights / 6 Days",
        price: "₹89,999",
      },
      {
        name: "Australia Premium",
        duration: "8 Nights / 9 Days",
        price: "₹1,39,999",
      },
    ],
  },

  {
    id: "vancouver",
    name: "Vancouver",
    country: "Canada",
    bestMonth: "June - September",
    image:
      "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Stanley Park",
        image:
          "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Capilano Bridge",
        image:
          "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Granville Island",
        image:
          "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Poutine",
      "Salmon",
      "Nanaimo Bars",
      "Maple Treats",
    ],

    shopping: [
      "Robson Street",
      "Granville Island",
      "Pacific Centre",
    ],

    history:
      "Vancouver is a coastal Canadian city known for mountains, ocean views, outdoor activities and multicultural communities.",

    activities: [
      "Hiking",
      "Whale Watching",
      "Kayaking",
      "City Tour",
    ],

    hotels: [
      {
        name: "Vancouver Central Hotel",
        price: "₹14,000 / night",
      },
      {
        name: "Vancouver Harbour Hotel",
        price: "₹25,000 / night",
      },
    ],

    packages: [
      {
        name: "Vancouver Explorer",
        duration: "5 Nights / 6 Days",
        price: "₹85,999",
      },
      {
        name: "Canada Premium",
        duration: "8 Nights / 9 Days",
        price: "₹1,29,999",
      },
    ],
  },

  {
    id: "los-angeles",
    name: "Los Angeles",
    country: "USA",
    bestMonth: "March - May",
    image:
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Hollywood",
        image:
          "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Santa Monica",
        image:
          "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Griffith Observatory",
        image:
          "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Tacos",
      "Burgers",
      "Korean BBQ",
      "Donuts",
    ],

    shopping: [
      "Rodeo Drive",
      "The Grove",
      "Melrose Avenue",
    ],

    history:
      "Los Angeles is a major American city known for Hollywood, entertainment, beaches and diverse cultures.",

    activities: [
      "Hollywood Tour",
      "Beach Visit",
      "Theme Parks",
      "Studio Tour",
    ],

    hotels: [
      {
        name: "Los Angeles Central Hotel",
        price: "₹15,000 / night",
      },
      {
        name: "Beverly Hills Hotel",
        price: "₹30,000 / night",
      },
    ],

    packages: [
      {
        name: "LA Explorer",
        duration: "5 Nights / 6 Days",
        price: "₹85,999",
      },
      {
        name: "California Premium",
        duration: "8 Nights / 9 Days",
        price: "₹1,29,999",
      },
    ],
  },

  {
    id: "san-francisco",
    name: "San Francisco",
    country: "USA",
    bestMonth: "September - November",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Golden Gate Bridge",
        image:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Alcatraz Island",
        image:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Fisherman's Wharf",
        image:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Sourdough Bread",
      "Clam Chowder",
      "Burritos",
      "Seafood",
    ],

    shopping: [
      "Union Square",
      "Pier 39",
      "Chinatown",
    ],

    history:
      "San Francisco is a historic California city famous for the Golden Gate Bridge, steep streets, cable cars and diverse neighborhoods.",

    activities: [
      "Golden Gate Visit",
      "Alcatraz Tour",
      "Cable Car Ride",
      "Bay Cruise",
    ],

    hotels: [
      {
        name: "San Francisco Central Hotel",
        price: "₹18,000 / night",
      },
      {
        name: "Bay View Hotel",
        price: "₹28,000 / night",
      },
    ],

    packages: [
      {
        name: "San Francisco Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹75,999",
      },
      {
        name: "California Premium",
        duration: "7 Nights / 8 Days",
        price: "₹1,19,999",
      },
    ],
  },

  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brazil",
    bestMonth: "December - March",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Christ the Redeemer",
        image:
          "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Copacabana Beach",
        image:
          "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Sugarloaf Mountain",
        image:
          "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Feijoada",
      "Pão de Queijo",
      "Churrasco",
      "Açaí",
    ],

    shopping: [
      "Ipanema",
      "Copacabana",
      "Saara Market",
    ],

    history:
      "Rio de Janeiro is one of Brazil's most famous cities, known for beaches, mountains, music, festivals and iconic landmarks.",

    activities: [
      "Beach Visit",
      "Christ the Redeemer",
      "Cable Car Ride",
      "City Tour",
    ],

    hotels: [
      {
        name: "Rio Beach Hotel",
        price: "₹10,000 / night",
      },
      {
        name: "Copacabana Luxury Hotel",
        price: "₹20,000 / night",
      },
    ],

    packages: [
      {
        name: "Rio Explorer",
        duration: "5 Nights / 6 Days",
        price: "₹65,999",
      },
      {
        name: "Brazil Premium",
        duration: "8 Nights / 9 Days",
        price: "₹99,999",
      },
    ],
  },

  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    bestMonth: "March - May",
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Jemaa el-Fnaa",
        image:
          "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Bahia Palace",
        image:
          "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Majorelle Garden",
        image:
          "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Tagine",
      "Couscous",
      "Pastilla",
      "Mint Tea",
    ],

    shopping: [
      "Marrakech Souks",
      "Medina",
      "Jemaa el-Fnaa",
    ],

    history:
      "Marrakech is a historic Moroccan city known for its medina, souks, palaces, gardens and vibrant cultural traditions.",

    activities: [
      "Desert Tour",
      "Souk Shopping",
      "Medina Walk",
      "Cooking Class",
    ],

    hotels: [
      {
        name: "Marrakech Riad",
        price: "₹8,000 / night",
      },
      {
        name: "Luxury Marrakech Resort",
        price: "₹20,000 / night",
      },
    ],

    packages: [
      {
        name: "Marrakech Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹49,999",
      },
      {
        name: "Morocco Premium",
        duration: "7 Nights / 8 Days",
        price: "₹85,999",
      },
    ],
  },

  {
    id: "kathmandu",
    name: "Kathmandu",
    country: "Nepal",
    bestMonth: "October - November",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Pashupatinath Temple",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Boudhanath Stupa",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Swayambhunath",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Momos",
      "Dal Bhat",
      "Thukpa",
      "Sel Roti",
    ],

    shopping: [
      "Thamel",
      "Asan Market",
      "Basantapur",
    ],

    history:
      "Kathmandu is Nepal's capital and a gateway to the Himalayas, known for temples, ancient architecture and rich cultural traditions.",

    activities: [
      "Temple Tour",
      "Mountain Flight",
      "Trekking",
      "Cultural Tour",
    ],

    hotels: [
      {
        name: "Kathmandu Central Hotel",
        price: "₹5,000 / night",
      },
      {
        name: "Himalayan Luxury Hotel",
        price: "₹12,000 / night",
      },
    ],

    packages: [
      {
        name: "Kathmandu Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹29,999",
      },
      {
        name: "Nepal Adventure",
        duration: "7 Nights / 8 Days",
        price: "₹55,999",
      },
    ],
  },

  {
    id: "manali",
    name: "Manali",
    country: "India",
    bestMonth: "March - June",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Solang Valley",
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Rohtang Pass",
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hadimba Temple",
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Siddu",
      "Thukpa",
      "Momos",
      "Dham",
    ],

    shopping: [
      "Mall Road",
      "Old Manali Market",
      "Tibetan Market",
    ],

    history:
      "Manali is a popular Himalayan hill destination known for mountain scenery, rivers, temples and adventure activities.",

    activities: [
      "Trekking",
      "Paragliding",
      "River Rafting",
      "Snow Activities",
    ],

    hotels: [
      {
        name: "Manali Valley Resort",
        price: "₹4,000 / night",
      },
      {
        name: "Mountain View Resort",
        price: "₹8,000 / night",
      },
    ],

    packages: [
      {
        name: "Manali Explorer",
        duration: "3 Nights / 4 Days",
        price: "₹14,999",
      },
      {
        name: "Himachal Adventure",
        duration: "6 Nights / 7 Days",
        price: "₹29,999",
      },
    ],
  },

  {
    id: "goa",
    name: "Goa",
    country: "India",
    bestMonth: "November - February",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Baga Beach",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Fort Aguada",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Basilica of Bom Jesus",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Goan Fish Curry",
      "Prawn Balchão",
      "Bebinca",
      "Pork Vindaloo",
    ],

    shopping: [
      "Anjuna Flea Market",
      "Panaji Market",
      "Mapusa Market",
    ],

    history:
      "Goa is an Indian coastal state famous for its beaches, Portuguese heritage, churches, food and relaxed tourism culture.",

    activities: [
      "Beach Hopping",
      "Water Sports",
      "Scuba Diving",
      "Sunset Cruise",
    ],

    hotels: [
      {
        name: "Goa Beach Resort",
        price: "₹5,000 / night",
      },
      {
        name: "North Goa Luxury Resort",
        price: "₹12,000 / night",
      },
    ],

    packages: [
      {
        name: "Goa Explorer",
        duration: "3 Nights / 4 Days",
        price: "₹18,999",
      },
      {
        name: "Goa Premium",
        duration: "5 Nights / 6 Days",
        price: "₹32,999",
      },
    ],
  },

  {
    id: "jaipur",
    name: "Jaipur",
    country: "India",
    bestMonth: "October - March",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Amber Fort",
        image:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hawa Mahal",
        image:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "City Palace",
        image:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Dal Baati Churma",
      "Ghewar",
      "Pyaaz Kachori",
      "Laal Maas",
    ],

    shopping: [
      "Johari Bazaar",
      "Bapu Bazaar",
      "Tripolia Bazaar",
    ],

    history:
      "Jaipur is Rajasthan's capital and is known as the Pink City because of its distinctive historic architecture.",

    activities: [
      "Fort Tour",
      "Heritage Walk",
      "Shopping",
      "Cultural Show",
    ],

    hotels: [
      {
        name: "Jaipur Heritage Hotel",
        price: "₹5,000 / night",
      },
      {
        name: "Jaipur Palace Hotel",
        price: "₹15,000 / night",
      },
    ],

    packages: [
      {
        name: "Jaipur Explorer",
        duration: "3 Nights / 4 Days",
        price: "₹19,999",
      },
      {
        name: "Rajasthan Premium",
        duration: "6 Nights / 7 Days",
        price: "₹39,999",
      },
    ],
  },

  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    bestMonth: "September - March",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Alleppey",
        image:
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Munnar",
        image:
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Kovalam",
        image:
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Appam",
      "Puttu",
      "Kerala Sadya",
      "Fish Curry",
    ],

    shopping: [
      "MG Road Kochi",
      "Kovalam Market",
      "Spice Markets",
    ],

    history:
      "Kerala is known for its backwaters, tropical landscapes, Ayurveda, rich culture and traditional cuisine.",

    activities: [
      "Houseboat Cruise",
      "Tea Plantation Visit",
      "Ayurveda Experience",
      "Beach Visit",
    ],

    hotels: [
      {
        name: "Kerala Backwater Resort",
        price: "₹6,000 / night",
      },
      {
        name: "Munnar Luxury Resort",
        price: "₹10,000 / night",
      },
    ],

    packages: [
      {
        name: "Kerala Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹25,999",
      },
      {
        name: "Kerala Premium",
        duration: "6 Nights / 7 Days",
        price: "₹45,999",
      },
    ],
  },

  {
    id: "varanasi",
    name: "Varanasi",
    country: "India",
    bestMonth: "October - March",
    image:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Dashashwamedh Ghat",
        image:
          "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Kashi Vishwanath Temple",
        image:
          "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Assi Ghat",
        image:
          "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Kachori Sabzi",
      "Banarasi Paan",
      "Lassi",
      "Chaat",
    ],

    shopping: [
      "Vishwanath Gali",
      "Godowlia Market",
      "Thatheri Bazaar",
    ],

    history:
      "Varanasi is one of India's oldest continuously inhabited cities and is famous for its ghats, temples, traditions and spiritual heritage.",

    activities: [
      "Ganga Aarti",
      "Boat Ride",
      "Temple Visit",
      "Heritage Walk",
    ],

    hotels: [
      {
        name: "Varanasi Heritage Hotel",
        price: "₹4,000 / night",
      },
      {
        name: "Ganges View Hotel",
        price: "₹8,000 / night",
      },
    ],

    packages: [
      {
        name: "Varanasi Explorer",
        duration: "2 Nights / 3 Days",
        price: "₹12,999",
      },
      {
        name: "Spiritual India",
        duration: "5 Nights / 6 Days",
        price: "₹29,999",
      },
    ],
  },

  {
    id: "agra",
    name: "Agra",
    country: "India",
    bestMonth: "October - March",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Taj Mahal",
        image:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Agra Fort",
        image:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mehtab Bagh",
        image:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Petha",
      "Mughlai Cuisine",
      "Bedai",
      "Dalmoth",
    ],

    shopping: [
      "Sadar Bazaar",
      "Kinari Bazaar",
      "Subhash Bazaar",
    ],

    history:
      "Agra is a historic Indian city best known as the home of the Taj Mahal and several important Mughal-era monuments.",

    activities: [
      "Taj Mahal Visit",
      "Agra Fort Tour",
      "Heritage Walk",
      "Food Tour",
    ],

    hotels: [
      {
        name: "Agra Heritage Hotel",
        price: "₹5,000 / night",
      },
      {
        name: "Taj View Hotel",
        price: "₹12,000 / night",
      },
    ],

    packages: [
      {
        name: "Agra Explorer",
        duration: "2 Nights / 3 Days",
        price: "₹12,999",
      },
      {
        name: "Golden Triangle",
        duration: "5 Nights / 6 Days",
        price: "₹29,999",
      },
    ],
  },

  {
    id: "udaipur",
    name: "Udaipur",
    country: "India",
    bestMonth: "October - March",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "City Palace",
        image:
          "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Lake Pichola",
        image:
          "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Jag Mandir",
        image:
          "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Dal Baati Churma",
      "Gatte Ki Sabzi",
      "Laal Maas",
      "Malpua",
    ],

    shopping: [
      "Hathi Pol",
      "Bada Bazaar",
      "Shilpgram",
    ],

    history:
      "Udaipur is a historic city in Rajasthan famous for its lakes, palaces, Rajput heritage and romantic landscapes.",

    activities: [
      "Lake Cruise",
      "Palace Tour",
      "Heritage Walk",
      "Cultural Show",
    ],

    hotels: [
      {
        name: "Udaipur Lake Hotel",
        price: "₹7,000 / night",
      },
      {
        name: "Udaipur Palace Resort",
        price: "₹20,000 / night",
      },
    ],

    packages: [
      {
        name: "Udaipur Explorer",
        duration: "3 Nights / 4 Days",
        price: "₹22,999",
      },
      {
        name: "Rajasthan Royal",
        duration: "6 Nights / 7 Days",
        price: "₹49,999",
      },
    ],
  },

  {
    id: "rishikesh",
    name: "Rishikesh",
    country: "India",
    bestMonth: "September - November",
    image:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Laxman Jhula",
        image:
          "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Triveni Ghat",
        image:
          "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Beatles Ashram",
        image:
          "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Aloo Puri",
      "Momos",
      "Chole Bhature",
      "Lassi",
    ],

    shopping: [
      "Ram Jhula Market",
      "Laxman Jhula Market",
      "Tapovan Market",
    ],

    history:
      "Rishikesh is a spiritual and adventure destination on the Ganges, famous for yoga, temples, ashrams and outdoor activities.",

    activities: [
      "River Rafting",
      "Bungee Jumping",
      "Yoga",
      "Trekking",
    ],

    hotels: [
      {
        name: "Rishikesh Riverside Resort",
        price: "₹4,000 / night",
      },
      {
        name: "Ganges View Resort",
        price: "₹9,000 / night",
      },
    ],

    packages: [
      {
        name: "Rishikesh Adventure",
        duration: "2 Nights / 3 Days",
        price: "₹9,999",
      },
      {
        name: "Rishikesh Premium",
        duration: "4 Nights / 5 Days",
        price: "₹19,999",
      },
    ],
  },

  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    bestMonth: "May - September",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",

    places: [
      {
        name: "Pangong Lake",
        image:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nubra Valley",
        image:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Leh Palace",
        image:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      },
    ],

    food: [
      "Momos",
      "Thukpa",
      "Skyu",
      "Tingmo",
    ],

    shopping: [
      "Leh Market",
      "Moti Market",
      "Tibetan Market",
    ],

    history:
      "Ladakh is a high-altitude Himalayan region known for monasteries, dramatic mountains, clear lakes and unique Tibetan-Buddhist culture.",

    activities: [
      "Bike Trip",
      "Trekking",
      "River Rafting",
      "Monastery Tour",
    ],

    hotels: [
      {
        name: "Leh Valley Hotel",
        price: "₹4,000 / night",
      },
      {
        name: "Ladakh Mountain Resort",
        price: "₹8,000 / night",
      },
    ],

    packages: [
      {
        name: "Ladakh Explorer",
        duration: "4 Nights / 5 Days",
        price: "₹24,999",
      },
      {
        name: "Ladakh Adventure",
        duration: "6 Nights / 7 Days",
        price: "₹39,999",
      },
    ],
  },

  {
    id: "amritsar", name: "Amritsar", country: "India", bestMonth: "October - March",
    image: "https://images.unsplash.com/photo-1588096344356-6d9b1ea2c1a6?auto=format&fit=crop&w=1200&q=80",
    places: [
      { name: "Golden Temple", image: "https://images.unsplash.com/photo-1588096344356-6d9b1ea2c1a6?auto=format&fit=crop&w=800&q=80", description: "A peaceful and remarkable spiritual landmark known for its community kitchen and reflective pool." },
      { name: "Jallianwala Bagh", image: "https://images.unsplash.com/photo-1598431415888-4d6c8a2a6d4c?auto=format&fit=crop&w=800&q=80", description: "A memorial garden preserving an important chapter of India's freedom struggle." },
      { name: "Wagah Border", image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=80", description: "A popular border ceremony experience with energetic crowds and patriotic performances." }
    ],
    food: ["Amritsari kulcha", "Chole", "Lassi", "Pinni sweets"], shopping: ["Hall Bazaar", "Katra Jaimal Singh", "Local phulkari shops"],
    history: "Amritsar is a major cultural city in Punjab, celebrated for the Golden Temple, Punjabi hospitality, historic memorials and a lively food scene. Plan time for both its spiritual landmarks and its busy bazaars.",
    activities: ["Golden Temple visit", "Punjabi food walk", "Heritage walking tour", "Wagah Border ceremony"],
    hotels: [{ name: "Heritage Stay Amritsar", price: "₹3,200 / night", description: "A comfortable base for exploring the old city and nearby heritage sights." }, { name: "Ranjit Avenue Suites", price: "₹5,400 / night", description: "A modern stay option close to dining and shopping areas." }],
    packages: [{ name: "Amritsar Heritage Break", duration: "2 Nights / 3 Days", price: "₹8,999", description: "A short cultural escape with a temple visit, local food and a heritage walk." }, { name: "Punjab Food & Culture", duration: "3 Nights / 4 Days", price: "₹13,999", description: "A relaxed itinerary pairing Amritsar's landmarks with Punjabi cuisine and local markets." }]
  },
  {
    id: "munnar", name: "Munnar", country: "India", bestMonth: "September - March",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1200&q=80",
    places: [
      { name: "Tea Gardens", image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=800&q=80", description: "Rolling green plantations make for scenic walks and memorable photographs." },
      { name: "Eravikulam National Park", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80", description: "A protected mountain landscape known for its grasslands and wildlife." },
      { name: "Mattupetty Dam", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80", description: "A scenic reservoir surrounded by hills and forested slopes." }
    ],
    food: ["Kerala appam and stew", "Puttu and kadala curry", "Spiced tea", "Banana fritters"], shopping: ["Tea outlets", "Spice shops", "Handmade chocolate stores"],
    history: "Munnar is a hill station in Kerala shaped by tea cultivation, misty highlands and a cool climate. It is a favourite for scenic drives, plantation visits and a slower nature-focused holiday.",
    activities: ["Tea plantation tour", "Waterfall visits", "Scenic mountain drive", "Nature photography"],
    hotels: [{ name: "Misty Hills Retreat", price: "₹4,500 / night", description: "A nature-focused stay with views of the surrounding hills." }, { name: "Tea Valley Lodge", price: "₹6,800 / night", description: "A cosy option for travellers wanting easy access to tea-country scenery." }],
    packages: [{ name: "Munnar Green Escape", duration: "2 Nights / 3 Days", price: "₹10,999", description: "A gentle hill-station itinerary with plantations, viewpoints and waterfalls." }, { name: "Kerala Hills & Backwaters", duration: "5 Nights / 6 Days", price: "₹25,999", description: "Combine Munnar's highlands with a relaxing backwater stay in Kerala." }]
  },
  {
    id: "kyoto", name: "Kyoto", country: "Japan", bestMonth: "March - May; October - November",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    places: [
      { name: "Fushimi Inari Shrine", image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=800&q=80", description: "Walk beneath rows of vermilion torii gates along forested shrine paths." },
      { name: "Arashiyama Bamboo Grove", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80", description: "A serene bamboo-lined route in one of Kyoto's best-known scenic districts." },
      { name: "Kinkaku-ji", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80", description: "The Golden Pavilion is reflected in a carefully landscaped pond and gardens." }
    ],
    food: ["Kaiseki cuisine", "Yudofu tofu hot pot", "Matcha desserts", "Yatsuhashi sweets"], shopping: ["Nishiki Market", "Teramachi Street", "Traditional craft shops"],
    history: "Kyoto served as Japan's imperial capital for more than a thousand years. Its temples, gardens, traditional streets and seasonal festivals make it a destination for travellers interested in heritage and Japanese culture.",
    activities: ["Temple and garden visits", "Tea ceremony", "Traditional district walk", "Matcha tasting"],
    hotels: [{ name: "Kyoto Garden Hotel", price: "₹9,500 / night", description: "A calm stay option for exploring historic districts and gardens." }, { name: "Gion Heritage Inn", price: "₹12,500 / night", description: "A traditional-style stay near Kyoto's atmospheric old streets." }],
    packages: [{ name: "Kyoto Culture Trail", duration: "3 Nights / 4 Days", price: "₹42,999", description: "Explore temples, gardens, traditional neighbourhoods and Japanese food." }, { name: "Japan Highlights", duration: "6 Nights / 7 Days", price: "₹89,999", description: "A sample multi-city itinerary connecting Kyoto with other iconic Japanese stops." }]
  },
  {
    id: "queenstown", name: "Queenstown", country: "New Zealand", bestMonth: "December - March",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
    places: [
      { name: "Lake Wakatipu", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80", description: "A striking lake framed by mountain ranges and walking paths." },
      { name: "Queenstown Gardens", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80", description: "A peaceful green space for a stroll, picnic or lakeside break." },
      { name: "Skyline Gondola", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", description: "Ride above town for panoramic views of the lake and Southern Alps." }
    ],
    food: ["New Zealand lamb", "Pavlova", "Local wines", "Fergburger-style gourmet burgers"], shopping: ["Queenstown Mall", "Local artisan stores", "Outdoor gear shops"],
    history: "Queenstown sits beside Lake Wakatipu on New Zealand's South Island and is known for dramatic alpine scenery and outdoor adventure. Visitors can balance thrill-seeking activities with lakeside walks and scenic excursions.",
    activities: ["Lake cruise", "Gondola ride", "Guided hiking", "Adventure sports"],
    hotels: [{ name: "Lakeview Queenstown Stay", price: "₹14,000 / night", description: "A scenic accommodation option with convenient access to the lakefront." }, { name: "Alpine Corner Lodge", price: "₹18,500 / night", description: "A comfortable base for outdoor activities and mountain day trips." }],
    packages: [{ name: "Queenstown Scenic Escape", duration: "3 Nights / 4 Days", price: "₹74,999", description: "A scenic short break with a lake cruise, gondola views and relaxed exploration." }, { name: "South Island Adventure", duration: "6 Nights / 7 Days", price: "₹1,29,999", description: "A sample adventure itinerary with alpine landscapes, outdoor activities and scenic drives." }]
  }

  ,
  {
    id: "new-delhi", name: "New Delhi", country: "India", bestMonth: "October - March",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    places: [
      { name: "India Gate", image: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?auto=format&fit=crop&w=800&q=80", description: "A landmark war memorial on a broad ceremonial avenue, especially atmospheric in the evening." },
      { name: "Humayun's Tomb", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80", description: "A Mughal garden tomb known for its symmetrical architecture and landscaped grounds." },
      { name: "Qutub Minar", image: "https://images.unsplash.com/photo-1606293926075-69a00db596f0?auto=format&fit=crop&w=800&q=80", description: "Explore a soaring medieval minaret and the historic complex surrounding it." }
    ],
    food: ["Chole bhature", "Parathas in Old Delhi", "Chaat", "Butter chicken"], shopping: ["Dilli Haat", "Janpath Market", "Chandni Chowk", "Khan Market"],
    history: "New Delhi blends grand avenues and government landmarks with centuries-old neighbourhoods, Mughal monuments, lively markets and an energetic food culture. Plan time for both historic Old Delhi and the spacious avenues of the capital.",
    activities: ["Old Delhi food walk", "Humayun's Tomb heritage visit", "Museum afternoon", "Evening at India Gate"],
    hotels: [{ name: "Capital Avenue Hotel", price: "₹4,800 / night", description: "A convenient city stay for sightseeing, shopping and access to major transport links." }, { name: "Lutyens Garden Suites", price: "₹7,200 / night", description: "A relaxed stay idea for travellers planning museums and central Delhi landmarks." }],
    packages: [{ name: "Delhi Heritage Weekend", duration: "2 Nights / 3 Days", price: "₹9,499", description: "A compact itinerary with historic monuments, a market walk and a guided local food experience." }, { name: "Capital Culture Explorer", duration: "3 Nights / 4 Days", price: "₹15,999", description: "Explore Old Delhi, Mughal architecture, museums and the capital's varied neighbourhoods." }]
  },
  {
    id: "mumbai", name: "Mumbai", country: "India", bestMonth: "November - February",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    places: [
      { name: "Gateway of India", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80", description: "A waterfront monument and popular starting point for exploring South Mumbai." },
      { name: "Marine Drive", image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=80", description: "Walk the sweeping seaside promenade and enjoy the city skyline at sunset." },
      { name: "Chhatrapati Shivaji Maharaj Terminus", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80", description: "A historic railway station celebrated for its striking Victorian Gothic architecture." }
    ],
    food: ["Vada pav", "Pav bhaji", "Bombay sandwiches", "Parsi cafe dishes"], shopping: ["Colaba Causeway", "Linking Road", "Crawford Market", "High Street Phoenix"],
    history: "Mumbai is a bustling coastal city where colonial-era architecture, film culture, busy markets and a diverse food scene sit alongside modern business districts. Waterfront promenades and neighbourhoods reward slow exploration between major sights.",
    activities: ["Sunset walk at Marine Drive", "South Mumbai architecture tour", "Street-food tasting", "Ferry ride from the waterfront"],
    hotels: [{ name: "Harbour Lights Hotel", price: "₹5,900 / night", description: "A practical base for waterfront sights, museums and South Mumbai's historic districts." }, { name: "Bandra Urban Retreat", price: "₹7,500 / night", description: "A contemporary stay idea close to restaurants, cafes and lively neighbourhood streets." }],
    packages: [{ name: "Mumbai City & Coast", duration: "2 Nights / 3 Days", price: "₹12,499", description: "A city break pairing waterfront landmarks, architecture and local street food." }, { name: "Mumbai Culture Trail", duration: "3 Nights / 4 Days", price: "₹19,999", description: "Explore heritage buildings, markets, coastal views and famous food spots." }]
  },
  {
    id: "bengaluru", name: "Bengaluru", country: "India", bestMonth: "October - February",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    places: [
      { name: "Lalbagh Botanical Garden", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80", description: "A large green garden with walking paths, mature trees and a glasshouse at its centre." },
      { name: "Bengaluru Palace", image: "https://images.unsplash.com/photo-1606293926075-69a00db596f0?auto=format&fit=crop&w=800&q=80", description: "A palace-style landmark with ornate interiors and grounds that offer a glimpse into the city's royal past." },
      { name: "Cubbon Park", image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80", description: "A leafy urban escape for morning walks and a pause from the city's busy streets." }
    ],
    food: ["Masala dosa", "Bisi bele bath", "Filter coffee", "Mangalorean snacks"], shopping: ["Commercial Street", "Church Street", "Indiranagar boutiques", "Brigade Road"],
    history: "Bengaluru mixes a garden-city feel with technology campuses, independent cafes, lively shopping streets and historic landmarks. Visitors can balance green spaces and palace architecture with contemporary food and arts scenes.",
    activities: ["Garden and park walk", "Cafe hopping", "Local breakfast trail", "Palace and heritage visit"],
    hotels: [{ name: "Garden City Boutique Hotel", price: "₹4,600 / night", description: "A comfortable city base for parks, restaurants and cultural sights." }, { name: "Indiranagar Stay Suites", price: "₹5,800 / night", description: "A modern stay idea near cafes, independent shops and evening dining options." }],
    packages: [{ name: "Bengaluru Weekend Break", duration: "2 Nights / 3 Days", price: "₹8,999", description: "A relaxed city itinerary with gardens, local breakfast and heritage highlights." }, { name: "Garden City Discovery", duration: "3 Nights / 4 Days", price: "₹14,999", description: "Combine parks, palace architecture, neighbourhood cafes and local shopping." }]
  },
  {
    id: "chandigarh", name: "Chandigarh", country: "India", bestMonth: "September - March",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1200&q=80",
    places: [
      { name: "Rock Garden", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80", description: "A creative sculpture garden made from recycled materials, with winding paths and courtyards." },
      { name: "Sukhna Lake", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80", description: "A calm reservoir popular for lakeside walks, boating and sunset views over the water." },
      { name: "Capitol Complex", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", description: "A notable modernist architectural area reflecting Chandigarh's planned-city design." }
    ],
    food: ["Chole bhature", "Punjabi thali", "Amritsari kulcha", "Lassi"], shopping: ["Sector 17 Plaza", "Elante Mall", "Local Punjabi boutiques", "Sector 22 market"],
    history: "Chandigarh is known for its planned layout, modernist architecture, landscaped gardens and relaxed urban rhythm. It makes an easy short break for visitors interested in design, open spaces, shopping and Punjabi cuisine.",
    activities: ["Lakeside walk at Sukhna Lake", "Rock Garden visit", "Architecture trail", "Punjabi food crawl"],
    hotels: [{ name: "Sector 17 City Hotel", price: "₹4,200 / night", description: "A convenient stay for shopping, restaurants and central city attractions." }, { name: "Garden View Chandigarh", price: "₹5,600 / night", description: "A comfortable base for landscaped gardens, lake visits and a relaxed city break." }],
    packages: [{ name: "Chandigarh City Escape", duration: "1 Night / 2 Days", price: "₹5,999", description: "A short itinerary featuring the Rock Garden, Sukhna Lake and Punjabi food." }, { name: "Design & Gardens Trail", duration: "2 Nights / 3 Days", price: "₹10,499", description: "Explore the city's architecture, green spaces, markets and local cuisine." }]
  }
];

export default destinations;