import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [flightOpen, setFlightOpen] = useState(false);
  const [taxiOpen, setTaxiOpen] = useState(false);

  return (
    <header className="bg-[#003b95] text-white">

      <div className="max-w-6xl mx-auto px-4">

        {/* TOP */}
        <div className="flex justify-between items-center py-4">

          <Link to="/" className="text-2xl font-bold">
            StayFinder
          </Link>

          <div className="flex items-center gap-4 text-sm">

            <button
              onClick={() => setShowSignup(true)}
              className="bg-white text-[#003b95] px-3 py-1 font-semibold"
            >
              Register
            </button>

            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-[#003b95] px-3 py-1 font-semibold"
            >
              Sign in
            </button>

          </div>
        </div>

        {/* NAV */}
        <div className="flex gap-6 pb-10 text-sm relative">

          <Link
            to="/search"
            className="border px-4 py-1 rounded-full"
          >
            Stays
          </Link>

          {/* ================= FLIGHTS ================= */}
          <div className="relative">

            <button
              onClick={() => setFlightOpen(!flightOpen)}
              className="hover:underline"
            >
              ✈ Flights
            </button>

            {flightOpen && (
              <div className="absolute top-8 left-0 bg-white text-black rounded shadow p-3 w-40 z-50">
                <p className="hover:bg-gray-100 p-1 cursor-pointer">Book Flight</p>
                <p className="hover:bg-gray-100 p-1 cursor-pointer">Flight Deals</p>
                <p className="hover:bg-gray-100 p-1 cursor-pointer">Check Status</p>
              </div>
            )}

          </div>

          {/* ================= AIRPORT TAXIS ================= */}
          <div className="relative">

            <button
              onClick={() => setTaxiOpen(!taxiOpen)}
              className="hover:underline"
            >
              🚕 Airport taxis
            </button>

            {taxiOpen && (
              <div className="absolute top-8 left-0 bg-white text-black rounded shadow p-3 w-44 z-50">
                <p className="hover:bg-gray-100 p-1 cursor-pointer">Book Taxi</p>
                <p className="hover:bg-gray-100 p-1 cursor-pointer">Airport Pickup</p>
                <p className="hover:bg-gray-100 p-1 cursor-pointer">Taxi Prices</p>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* LOGIN MODAL (keep your existing one) */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded w-80">
            <h2 className="text-xl font-bold mb-4">Login</h2>

            <input className="w-full border p-2 mb-3" placeholder="Email" />
            <input className="w-full border p-2 mb-4" placeholder="Password" type="password" />

            <button className="bg-blue-600 text-white w-full py-2">
              Login
            </button>

            <button onClick={() => setShowLogin(false)} className="mt-3 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded w-80">
            <h2 className="text-xl font-bold mb-4">Register</h2>

            <input className="w-full border p-2 mb-3" placeholder="Name" />
            <input className="w-full border p-2 mb-3" placeholder="Email" />
            <input className="w-full border p-2 mb-4" placeholder="Password" type="password" />

            <button className="bg-green-600 text-white w-full py-2">
              Create Account
            </button>

            <button onClick={() => setShowSignup(false)} className="mt-3 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}

    </header>
  );
}