import Header from "../components/Header";
import Hero from "../components/Hero";
import PropertyTypes from "../components/PropertyTypes";
import TrendingDestinations from "../components/TrendingDestinations";
import ExploreRwanda from "../components/ExploreRwanda";
import HomesGuestsLove from "../components/HomesGuestsLove";
import TravelMore from "../components/TravelMore";
import PopularWithTravelers from "../components/PopularWithTravelers";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      <Header />
      <Hero />

      <div className="pt-16">

        <PropertyTypes />

        <TrendingDestinations />

        <ExploreRwanda />

        <HomesGuestsLove />

        <TravelMore />

        <PopularWithTravelers />

      </div>

      <Footer />

    </div>
  );
}