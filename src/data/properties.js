const properties = [
  {
    id: 1,
    name: "Luxury Kigali Hotel",
    location: "Kigali, Rwanda",
    pricePerNight: 120,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Breakfast Included",
      "Parking"
    ],
    description:
      "Luxury stay in the heart of Kigali.",
    roomTypes: [
      {
        name: "Standard Room",
        capacity: 2,
        price: 120
      },
      {
        name: "Deluxe Room",
        capacity: 3,
        price: 180
      }
    ]
  },

  {
    id: 2,
    name: "Lake View Resort",
    location: "Gisenyi, Rwanda",
    pricePerNight: 95,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200"
    ],
    amenities: [
      "Lake View",
      "Restaurant",
      "WiFi"
    ],
    description:
      "Beautiful resort overlooking Lake Kivu.",
    roomTypes: [
      {
        name: "Resort Room",
        capacity: 2,
        price: 95
      }
    ]
  },

  {
    id: 3,
    name: "Urban Apartments",
    location: "Kigali, Rwanda",
    pricePerNight: 75,
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
    ],
    amenities: [
      "Kitchen",
      "WiFi",
      "Balcony"
    ],
    description:
      "Modern city apartments.",
    roomTypes: [
      {
        name: "Apartment",
        capacity: 4,
        price: 75
      }
    ]
  }
];

export default properties;