import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import '../css/FamilyHome.css';
import '../css/Houses.css';
import { Link } from 'react-router-dom';
import House_list from './Houses.json';

export default function Houses() {
  const allHouses = House_list.Houses || [];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHouses, setFilteredHouses] = useState(allHouses);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [minBaths, setMinBaths] = useState('');
  useEffect(() => {
  applyFilters(searchTerm, { minPrice, maxPrice, minBeds, minBaths });
}, [searchTerm, minPrice, maxPrice, minBeds, minBaths]);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^0-9]/g, ''));
  };

  const applyFilters = (text, filters) => {
    const term = text.toLowerCase();

    const filtered = allHouses.filter(house => {
      const price = parsePrice(house.price);
      const beds = Number(house.bedrooms);
      const baths = Number(house.bathrooms);

      const matchesSearch =
        house.title.toLowerCase().includes(term) ||
        house.address.toLowerCase().includes(term) ||
        house.price.toLowerCase().includes(term);

      const matchesMinPrice = !filters.minPrice || price >= Number(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || price <= Number(filters.maxPrice);
      const matchesBeds = !filters.minBeds || beds >= Number(filters.minBeds);
      const matchesBaths = !filters.minBaths || baths >= Number(filters.minBaths);

      return (
        matchesSearch &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBeds &&
        matchesBaths
      );
    });

    setFilteredHouses(filtered);
  };

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchTerm(text);
    applyFilters(text, { minPrice, maxPrice, minBeds, minBaths });
  };

//   const handleFilterChange = () => {
//     applyFilters(searchTerm, { minPrice, maxPrice, minBeds, minBaths });
//   };

  const resetFilters = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setMinBeds('');
    setMinBaths('');
    setFilteredHouses(allHouses);
  };
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="family-home">

      {/* Navbar */}
<header className="navbar">
    <div className="nav-container">
        <h1 className="logo">Family Home</h1>

        <div className="nav-right">
            <Link to="/" className="back-btn">◀ Back</Link>
        </div>
    </div>

{/* Filter Toggle */}
    <button
    className="filter-toggle"
    onClick={() => setShowFilters(prev => !prev)}
    >
    {showFilters ? 'Hide Filters ▲' : 'Show Filters ▼'}
    </button>

  {/* Collapsible Filters */}
  <div className={`search-filters ${showFilters ? 'open' : ''}`}>
    <input
      type="text"
      placeholder="Search by title, address, price..."
      value={searchTerm}
      onChange={handleSearch}
      className="search-input"
    />

    <div className="filter-row">
      <input type="number" placeholder="Min Price" value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)} />

      <input type="number" placeholder="Max Price" value={maxPrice}
       onChange={(e) => setMaxPrice(e.target.value)} />

      <input type="number" placeholder="Min Beds" value={minBeds}
        onChange={(e) => setMinBeds(e.target.value)} />

      <input type="number" placeholder="Min Baths" value={minBaths}
        onChange={(e) => setMinBaths(e.target.value)} />

      <button onClick={resetFilters} className="reset-btn">
        Reset
      </button>
    </div>
  </div>
</header>

{/* if showFilters is true, 5rem */}
      <div className="top-spacing" style={{paddingTop: showFilters ? '6rem' : '0.5rem'}}/>

      {/* Houses */}
      <section className="houses-section">
        {filteredHouses.length === 0 && (
          <p className="no-results">No houses found.</p>
        )}

        {filteredHouses.map((house, index) => (
          <div key={index} className="house-card">

            <img src={house.image} alt={house.title} className="house-image" />

            <div className="house-content">
              <h3 className="price">{house.price}</h3>
              <p className="address">{house.address}</p>

              <ul className="house-grid">
                <li>Area: {house.area}</li>
                <li>Bedrooms: {house.bedrooms}</li>
                <li>Bathrooms: {house.bathrooms}</li>
                <li>Parking: {house.parking}</li>
                <li>Floors: {house.floors}</li>
                <li>Year Built: {house.year_built}</li>
              </ul>

              {house.ref && (
                <a href={house.ref.split('Link: ')[1]} target="_blank" rel="noopener noreferrer">
                  View Listing
                </a>
              )}
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}