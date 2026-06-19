export default function TravelMore() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <h2 className="text-3xl font-bold mb-6">
        Travel more, spend less
      </h2>

      <div className="bg-white rounded-xl p-8 shadow flex justify-between items-center">

        <div>
          <h3 className="font-bold text-xl">
            Sign in, save money
          </h3>

          <p className="text-gray-500 mt-2">
            Save 10% or more at participating properties.
          </p>

          <div className="mt-4 flex gap-3">

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Sign in
            </button>

            <button className="border px-4 py-2 rounded">
              Register
            </button>

          </div>
        </div>

        <div className="hidden md:block text-6xl">
          
        </div>

      </div>

    </section>
  );
}