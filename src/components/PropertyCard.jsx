import { Link } from "react-router-dom";

export default function PropertyCard({
  property,
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">

      <img
        src={property.images[0]}
        alt={property.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold text-lg">
          {property.name}
        </h3>

        <p className="text-gray-500">
          {property.location}
        </p>

        <div className="flex justify-between mt-4">

          <span>
            ${property.pricePerNight}/night
          </span>

          <Link
            to={`/property/${property.id}`}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            View
          </Link>

        </div>
      </div>
    </div>
  );
}