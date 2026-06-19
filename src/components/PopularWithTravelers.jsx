const categories = [
  "Kigali Hotels",
  "Domestic Cities",
  "International Cities",
  "Countries",
  "Apartments",
  "Resorts",
  "Villas",
  "Hostels",
  "Guest Houses",
];

export default function PopularWithTravelers() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <h2 className="text-3xl font-bold mb-6">
        Popular with travelers from Rwanda
      </h2>

      <div className="flex flex-wrap gap-3">

        {categories.map((item) => (
          <button
            key={item}
            className="px-4 py-2 border rounded-full hover:bg-blue-50"
          >
            {item}
          </button>
        ))}

      </div>

    </section>
  );
}