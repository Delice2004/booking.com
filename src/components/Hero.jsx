import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="bg-[#003b95] text-white">

      {/* TEXT SECTION */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-6 md:pb-10">

        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight">
          Find your next stay
        </h1>

        <p className="text-lg md:text-2xl mt-3">
          Search deals on hotels, homes, and much more...
        </p>

      </div>

      {/* SEARCH BAR (NO ABSOLUTE) */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <SearchBar />
      </div>

    </section>
  );
}