import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const places = [
  {
    id: 1,
    name: "Kigali",
    properties: "1,454 properties",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1000",
  },

  {
    id: 2,
    name: "Gisenyi",
    properties: "48 properties",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000",
  },

  {
    id: 3,
    name: "Musanze",
    properties: "42 properties",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000",
  },

  {
    id: 4,
    name: "Kibuye",
    properties: "17 properties",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000",
  },

  {
    id: 5,
    name: "Nyagatare",
    properties: "7 properties",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
  },
];

export default function ExploreRwanda() {
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
        Explore Rwanda
      </h2>

      <p className="text-gray-500 mb-6">
        These popular destinations have a lot to offer
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

        {places.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >

            <div className="relative">

              <img
                src={place.image}
                alt={place.name}
                className="h-40 w-full object-cover"
              />

              <button
                onClick={() => toggleFavorite(place.id)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full"
              >
                <FaHeart
                  className={
                    favorites.includes(place.id)
                      ? "text-red-500"
                      : "text-gray-300"
                  }
                />
              </button>

            </div>

            <div className="p-4">

              <h3 className="font-bold text-lg">
                {place.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {place.properties}
              </p>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}