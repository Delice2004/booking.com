export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-5 gap-8">

          <div>
            <h3 className="font-bold mb-4">
              Support
            </h3>

            <p>Manage your trips</p>
            <p>Contact Customer Service</p>
            <p>Safety Resource Center</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Discover
            </h3>

            <p>Seasonal deals</p>
            <p>Travel articles</p>
            <p>Booking for Business</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Terms
            </h3>

            <p>Privacy Notice</p>
            <p>Terms of Service</p>
            <p>Accessibility</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Partners
            </h3>

            <p>Partner Help</p>
            <p>List your property</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              About
            </h3>

            <p>About Us</p>
            <p>Careers</p>
            <p>Press Center</p>
          </div>

        </div>

        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 StayFinder Clone. Built with React & Tailwind.
        </div>

      </div>

    </footer>
  );
}