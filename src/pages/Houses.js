import React, { useState, useEffect } from 'react';
import { useData } from '../utils/DataContext';
import '../css/Home.css';
import '../css/FamilyHome.css';
import '../css/Houses.css';
import { Link } from 'react-router-dom';
// import { loadExcelData } from '../utils/loadExcel';

export default function Houses() {

  
  // const [allHouses, setAllHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [minBaths, setMinBaths] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Load Excel data
  const { data } = useData();
  const allHouses = data.houses;

  // useEffect(() => {
  //   loadExcelData().then(data => {
  //     setAllHouses(data.houses);
  //     setFilteredHouses(data.houses);
  //   });
  // }, []);

  useEffect(() => {
    applyFilters(searchTerm);
  }, [searchTerm, minPrice, maxPrice, minBeds, minBaths, allHouses]);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(String(priceStr).replace(/[^0-9]/g, ''));
  };

  const applyFilters = (text) => {
    const term = text.toLowerCase();

    const filtered = allHouses.filter(house => {
      const price = parsePrice(house.Price);
      const beds = Number(house.Beds);
      const baths = Number(house.Baths);

      const matchesSearch =
        String(house.District).toLowerCase().includes(term) ||
        // String(house.Address).toLowerCase().includes(term) ||
        String(house.Price).toLowerCase().includes(term);

      return (
        matchesSearch &&
        (!minPrice || price >= Number(minPrice)) &&
        (!maxPrice || price <= Number(maxPrice)) &&
        (!minBeds || beds >= Number(minBeds)) &&
        (!minBaths || baths >= Number(minBaths))
      );
    });

    setFilteredHouses(filtered);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setMinBeds('');
    setMinBaths('');
  };

  return (
    <div className="family-home">
      <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">Family Home</h1>
          <div className="nav-right">
            <Link to="/" className="back-btn">◀ Back</Link>
          </div>
        </div>

        <button className="filter-toggle" onClick={() => setShowFilters(prev => !prev)}>
          {showFilters ? 'Hide Filters ▲' : 'Show Filters ▼'}
        </button>

        <div className={`search-filters ${showFilters ? 'open' : ''}`}>
          <input
            type="text"
            placeholder=" Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="filter-row">
            <input type="number" placeholder="Min Price" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
            <input type="number" placeholder="Max Price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            <input type="number" placeholder="Min Beds" value={minBeds} onChange={e => setMinBeds(e.target.value)} />
            <input type="number" placeholder="Min Baths" value={minBaths} onChange={e => setMinBaths(e.target.value)} />

            <button onClick={resetFilters} className="reset-btn">Reset</button>
          </div>
        </div>
      </header>

      <div className="top-spacing" style={{ paddingTop: showFilters ? '6rem' : '0.5rem' }} />

      <section className="houses-section">
        {filteredHouses.length === 0 && <p>No houses found.</p>}

        {filteredHouses.map((house, index) => (
          <div key={index} className="house-card">
            <img src={house.Image} alt={house.District} className="house-image" />

            <div className="house-content">
              <h3 className="price">${house.Price}</h3>
              <p className="address">{house.District}</p>

              <ul className="house-grid">
                <li>Area: {house.Area}</li>
                <li>Bedrooms: {house.Beds}</li>
                <li>Bathrooms: {house.Baths}</li>
                <li>Year Built: {house.Built_Yr}</li>
                {/* Comment spans full width */}
                  <li className="full-width-item">
                    <b>Comment:</b> {house.Comments}
                  </li>
{house.Link && (
  <a className='NavExt' href={house.Link} target="_blank" rel="noopener noreferrer">
    View Listing
  </a>
)}

<a className='NavExt' href="mailto:hahikeyuaono@gmail.com">
  Contact Us
</a>
              </ul>

            </div>
          </div>
        ))}
      </section>
    </div>
  );
}