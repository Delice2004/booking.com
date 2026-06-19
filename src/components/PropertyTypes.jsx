import { Link } from "react-router-dom";

const types = [
  {
    name: "Hotels",
    type: "hotel",
    count: "233 Hotels",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
  },
  {
    name: "apartments",
    type: "apartment",
    count: "145 Apartments",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
  },
  {
    name: "resorts",
    type: "resort",
    count: "98 Rentals",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
  },
  {
    name: "villas",
    type: "villa",
    count: "120 Villas",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600",
  },
];

export default function PropertyTypes() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">
        Browse by property type
      </h2>

      <p className="text-gray-500 mb-6">
        The largest selection of hotels, homes, and vacation rentals
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {types.map((item) => (
          <Link
            key={item.name}
            to={`/type/${item.type}`}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.count}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}