import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4">

      <div className="bg-white border-4 border-[#febb02] rounded-lg shadow-xl">

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12">

          {/* Destination */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r flex items-center px-4 py-3">
            <span className="mr-3 text-gray-500">🏨</span>
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Dates */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r flex items-center px-4 py-3">
            <span className="mr-3 text-gray-500">📅</span>
            <span className="text-gray-700 text-sm">
              Check-in — Check-out
            </span>
          </div>

          {/* Guests */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r flex items-center px-4 py-3">
            <span className="mr-3 text-gray-500">👤</span>
            <span className="text-gray-700 text-sm">
              2 adults · 0 children · 1 room
            </span>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              onClick={() => navigate("/search")}
              className="bg-[#0071c2] text-white w-full py-4 font-semibold"
            >
              Search
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}