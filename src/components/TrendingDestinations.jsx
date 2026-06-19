import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    name: "Kigali",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1000",
  },
  {
    id: 2,
    name: "Nairobi",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1000",
  },
  {
    id: 3,
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1000",
  },
  {
    id: 4,
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000",
  },
];

export default function TrendingDestinations() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">
        Trending Destinations
      </h2>

      <p className="text-gray-500 mb-6">
        Popular choices for travelers
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {destinations.map((city) => (
          <div
            key={city.id}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={city.image}
              alt={city.name}
              className="h-72 w-full object-cover"
            />

            <button
              onClick={() => toggleFavorite(city.id)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full"
            >
              <FaHeart
                className={
                  favorites.includes(city.id)
                    ? "text-red-500"
                    : "text-gray-300"
                }
              />
            </button>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-3xl font-bold">
                {city.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}