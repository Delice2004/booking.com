const types = [
  {
    name: "Hotels",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
  },
  {
    name: "Apartments",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
  },
  {
    name: "Resorts",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600"
  },
  {
    name: "Villas",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600"
  }
];

export default function PropertyTypes() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <h2 className="text-3xl font-bold mb-6">
        Browse by property type
      </h2>

      <div className="grid md:grid-cols-4 gap-5">

        {types.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-4 font-semibold">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}