import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function HomesGuestsLove() {
  const [liked, setLiked] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">
        Homes guests love
      </h2>

      <div className="bg-white rounded-xl shadow overflow-hidden max-w-sm">

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
            alt=""
            className="w-full h-60 object-cover"
          />

          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-3 right-3 bg-white p-2 rounded-full"
          >
            <FaHeart
              className={
                liked
                  ? "text-red-500"
                  : "text-gray-300"
              }
            />
          </button>

        </div>

        <div className="p-4">
          <h3 className="font-bold">
            Aparthotel Stare Miasto
          </h3>

          <p className="text-gray-500">
            Krakow, Poland
          </p>

          <p className="mt-3 font-bold">
            Starting from US$199
          </p>
        </div>

      </div>
    </section>
  );
}