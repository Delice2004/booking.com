import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function SearchResults() {
return ( <section className="max-w-7xl mx-auto px-4 py-10"> <h1 className="text-3xl font-bold mb-6">
Available Stays </h1>

```
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties.map((property) => (
      <PropertyCard
        key={property.id}
        property={property}
      />
    ))}
  </div>
</section>

);
}
