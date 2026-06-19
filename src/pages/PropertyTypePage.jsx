import { useParams } from "react-router-dom";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function PropertyTypePage() {
  const { type } = useParams();

  const filteredProperties = properties.filter(
    (property) => property.type === type
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {type}s
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}