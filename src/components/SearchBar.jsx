import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar() {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [destination, setDestination] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const guestsRef = useRef(null);

  const destinations = [
    "Kigali",
    "Volcanoes National Park",
    "Lake Kivu",
    "Nyungwe Forest",
    "Akagera National Park",
    "Butare",
    "Gisenyi",
    "Musanze",
  ];

  const filteredDestinations = destinations.filter((dest) =>
    dest.toLowerCase().includes(destination.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setShowGuestsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4">

      <div className="bg-white border-4 border-[#febb02] rounded-lg shadow-xl">

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12">

          {/* Destination */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r px-4 py-3 relative" ref={dropdownRef}>
            <div className="flex items-center h-full">
              <span className="mr-3 text-gray-500">🏨</span>
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  className="w-full outline-none text-gray-700 py-1"
                />
                {showDropdown && filteredDestinations.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded mt-1 shadow-lg z-50">
                    {filteredDestinations.map((dest, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setDestination(dest);
                          setShowDropdown(false);
                        }}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700 text-sm border-b last:border-b-0"
                      >
                        📍 {dest}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r flex items-center px-4 py-3 gap-2">
            <span className="mr-3 text-gray-500">📅</span>
            <div className="flex gap-2 w-full">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Check-in"
                dateFormat="MMM d"
                minDate={new Date()}
                className="w-full outline-none text-gray-700 text-sm px-2 py-1 border border-gray-200 rounded"
              />
              <span className="text-gray-500">—</span>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Check-out"
                dateFormat="MMM d"
                minDate={checkInDate || new Date()}
                className="w-full outline-none text-gray-700 text-sm px-2 py-1 border border-gray-200 rounded"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r flex items-center px-4 py-3 relative" ref={guestsRef}>
            <span className="mr-3 text-gray-500">👤</span>
            <button
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              className="text-gray-700 text-sm w-full text-left outline-none hover:bg-gray-50 rounded px-2 py-1"
            >
              {adults} adults · {children} children · {rooms} room{rooms !== 1 ? "s" : ""}
            </button>
            {showGuestsDropdown && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded mt-1 shadow-lg z-50 w-64">
                <div className="p-4 space-y-4">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">Adults</p>
                      <p className="text-xs text-gray-500">Age 18+</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 border border-gray-300 rounded hover:border-gray-400 flex items-center justify-center text-lg text-red-600"
                        title="Remove adult"
                        aria-label="Remove adult"
                      >
                        ➖
                      </button>
                      <span className="w-4 text-center font-medium">{adults}</span>
                      <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 border border-gray-300 rounded hover:border-gray-400 flex items-center justify-center text-lg text-green-600"
                        title="Add adult"
                        aria-label="Add adult"
                      >
                        ➕
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">Children</p>
                      <p className="text-xs text-gray-500">Age 0-17</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 border border-gray-300 rounded hover:border-gray-400 flex items-center justify-center text-lg text-red-600"
                        title="Remove child"
                        aria-label="Remove child"
                      >
                        ➖
                      </button>
                      <span className="w-4 text-center font-medium">{children}</span>
                      <button
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 border border-gray-300 rounded hover:border-gray-400 flex items-center justify-center text-lg text-green-600"
                        title="Add child"
                        aria-label="Add child"
                      >
                        ➕
                      </button>
                    </div>
                  </div>

                  {/* Rooms */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">Rooms</p>
                      <p className="text-xs text-gray-500">How many</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                        className="w-8 h-8 border border-gray-300 rounded hover:border-gray-400 flex items-center justify-center text-lg text-red-600"
                        title="Remove room"
                        aria-label="Remove room"
                      >
                        ➖
                      </button>
                      <span className="w-4 text-center font-medium">{rooms}</span>
                      <button
                        onClick={() => setRooms(rooms + 1)}
                        className="w-8 h-8 border border-gray-300 rounded hover:border-gray-400 flex items-center justify-center text-lg text-green-600"
                        title="Add room"
                        aria-label="Add room"
                      >
                        ➕
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
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