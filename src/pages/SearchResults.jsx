import { useLocation } from "react-router-dom";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function SearchResults() {
  const { state } = useLocation();

  const filtered = state?.destination
    ? properties.filter((p) =>
        p.location.toLowerCase().includes(state.destination.toLowerCase())
      )
    : properties;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <h1 className="text-xl font-bold mb-4">
        Results for "{state?.destination || "All stays"}"
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

    </div>
  );
}