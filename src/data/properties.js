const properties = [
  {
    id: 1,
    type: "hotel",
    name: "Luxury Kigali Hotel",
    location: "Kigali, Rwanda",
    pricePerNight: 120,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
    ],
    amenities: ["Free WiFi", "Swimming Pool", "Breakfast Included", "Parking"],
    description: "Luxury stay in the heart of Kigali.",
    roomTypes: [
      { name: "Standard Room", capacity: 2, price: 120 },
      { name: "Deluxe Room", capacity: 3, price: 180 }
    ]
  },

  {
    id: 2,
    type: "hotel",
    name: "Kigali Grand Hotel",
    location: "Kigali, Rwanda",
    pricePerNight: 140,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200"
    ],
    amenities: ["WiFi", "Pool", "Restaurant"],
    description: "Modern luxury hotel.",
    roomTypes: [
      { name: "Standard", capacity: 2, price: 140 }
    ]
  },

  {
    id: 3,
    type: "resort",
    name: "Lake View Resort",
    location: "Gisenyi, Rwanda",
    pricePerNight: 95,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200"
    ],
    amenities: ["Lake View", "Restaurant", "WiFi"],
    description: "Beautiful resort overlooking Lake Kivu.",
    roomTypes: [
      { name: "Resort Room", capacity: 2, price: 95 }
    ]
  },

  {
    id: 4,
    type: "resort",
    name: "Kivu Paradise Resort",
    location: "Karongi, Rwanda",
    pricePerNight: 110,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200"
    ],
    amenities: ["Beach", "WiFi", "Pool"],
    description: "Relax near Lake Kivu.",
    roomTypes: [
      { name: "Family Room", capacity: 4, price: 110 }
    ]
  },

  {
    id: 5,
    type: "apartment",
    name: "Urban Apartments",
    location: "Kigali, Rwanda",
    pricePerNight: 75,
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
    ],
    amenities: ["Kitchen", "WiFi", "Balcony"],
    description: "Modern city apartments.",
    roomTypes: [
      { name: "Apartment", capacity: 4, price: 75 }
    ]
  },

  {
    id: 6,
    type: "apartment",
    name: "City View Apartments",
    location: "Kigali, Rwanda",
    pricePerNight: 85,
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200"
    ],
    amenities: ["Kitchen", "Parking"],
    description: "Comfortable apartments.",
    roomTypes: [
      { name: "Studio", capacity: 2, price: 85 }
    ]
  },

  {
    id: 7,
    type: "villa",
    name: "Green Hills Villa",
    location: "Musanze, Rwanda",
    pricePerNight: 220,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200"
    ],
    amenities: ["Pool", "Garden", "WiFi"],
    description: "Luxury private villa.",
    roomTypes: [
      { name: "Entire Villa", capacity: 8, price: 220 }
    ]
  },

  {
    id: 8,
    type: "villa",
    name: "Sunset Villa",
    location: "Rubavu, Rwanda",
    pricePerNight: 250,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"
    ],
    amenities: ["Lake View", "Pool"],
    description: "Beautiful villa with sunset views.",
    roomTypes: [
      { name: "Entire Villa", capacity: 10, price: 250 }
    ]
  }
];

export default properties;