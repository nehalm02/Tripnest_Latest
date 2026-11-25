


import Hotels from "./Hotels";

function HotelsPage() {
  return (
    <>
      <div className="page-header">
        <p>TRIPNEST HOTELS</p>
        <h1>Find Your Perfect Stay 🏨</h1>
        <span>
          Explore hotels, resorts and comfortable stays around the world.
          Search by destination, compare prices and find the right amenities.
        </span>
      </div>

      <Hotels fullPage />
    </>
  );
}

export default HotelsPage;
