import React, { useState, useEffect } from 'react';
import { useData } from '../utils/DataContext';
import '../css/Home.css';
import '../css/FamilyHome.css';
import '../css/Houses.css';
import { Link } from 'react-router-dom';
import { PulseLoader } from "react-spinners";
import ContactModal from '../components/ContactModal';
// import { loadExcelData } from '../utils/loadExcel';
// import { SHEET_URLS } from "../utils/sheetURLs";
// import { loadCSV } from "../utils/loadCSV";


export default function Houses() {

  
  // const [allHouses, setAllHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [minBaths, setMinBaths] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');
  
  const { data, loading } = useData();
  const allHouses = data.houses;
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  applyFilters(searchTerm);
  }, [
    searchTerm,
    minPrice,
    maxPrice,
    minBeds,
    minBaths,
    filterMonth,
    filterYear,
    allHouses
  ]);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(String(priceStr).replace(/[^0-9]/g, ''));
  };
  const parseDate = (str) => {
    if (!str) return null;
    const d = new Date(str);
    return isNaN(d) ? null : d;
  };

  const applyFilters = (text) => {
    const term = text.toLowerCase();

    const filtered = allHouses.filter(house => {
      const price = parsePrice(house.Price);
      const beds = Number(house.Beds);
      const baths = Number(house.Baths);

      const matchesSearch =
        String(house.District).toLowerCase().includes(term) ||
        String(house.Price).toLowerCase().includes(term);

      const date = parseDate(house.AvailableAt);

      const matchesDate = (() => {
        if (!filterMonth && !filterYear) return true;

        const filterDate =
          filterYear && filterMonth
            ? new Date(Number(filterYear), Number(filterMonth) - 1, 1)
            : filterYear
              ? new Date(Number(filterYear), 0, 1)
              : new Date(0);

        // include empty dates always
        if (!date) return true;

        return date >= filterDate;
      })();

      return (
        matchesSearch &&
        (!minPrice || price >= Number(minPrice)) &&
        (!maxPrice || price <= Number(maxPrice)) &&
        (!minBeds || beds >= Number(minBeds)) &&
        (!minBaths || baths >= Number(minBaths)) &&
        matchesDate
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
    setFilterMonth('');
    setFilterYear('');
  };

  if (loading) {
      return (
          <div className="loader-container">
          <PulseLoader color="#36d7b7" size={20} />
          </div>
      );
  }


  return (
    <div className="family-home">
      <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">My KY Home</h1>

          {/* NEW: center container */}
          <div className="nav-center">
            <button className="filter-toggle" onClick={() => setShowFilters(prev => !prev)}>
              {showFilters ? 'Hide Filters ▲' : 'Show Filters ▼'}
            </button>
          </div>

          <div className="nav-right">
            <Link to="/" className="back-btn">◀ Back</Link>
          </div>
        </div>
        {/* <div className="nav-container">
          <h1 className="logo">My KY Home</h1>
          <div className="nav-right">
            <Link to="/" className="back-btn">◀ Back</Link>
          </div>
        </div> */}

        {/* <button className="filter-toggle" onClick={() => setShowFilters(prev => !prev)}>
          {showFilters ? 'Hide Filters ▲' : 'Show Filters ▼'}
        </button> */}

      </header>
      
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
            <input
              type="number"
              placeholder="Month (mm)"
              value={filterMonth}
              onChange={e => setFilterMonth(e.target.value)}
            />

            <input
              type="number"
              placeholder="Year (yyyy)"
              value={filterYear}
              onChange={e => setFilterYear(e.target.value)}
            />


            <button onClick={resetFilters} className="reset-btn">Reset</button>
          </div>
        </div>

      <div className="top-spacing" style={{ paddingTop: showFilters ? '6rem' : '1rem' }} />

      <section className="houses-section">
        {filteredHouses.length === 0 && <p>No houses found.</p>}

        {filteredHouses.map((house, index) => (
          <div key={index} className="house-card">
            <img src={house.Image} alt={house.District} className="house-image" 
              crossOrigin="anonymous"  /* Add this */
              loading="lazy"           /* for performance */
            />

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
                  <b>Available from: </b> {house.AvailableAt && new Date(house.AvailableAt).toLocaleDateString("en-US")}
                  </li>
                  <li className="full-width-item">
                    <b>Comment:</b> {house.Comments}
                  </li>
{house.Link && (
  <a className='NavExt' href={house.Link} target="_blank" rel="noopener noreferrer">
    View Listing
  </a>
)}

{/* <a className='NavExt' href="mailto:hahikeyuaono@gmail.com"> */}
<a className="NavExt" onClick={() => setShowModal(true)}>
  Contact Us
</a>
{showModal && <ContactModal onClose={() => setShowModal(false)} />}
              </ul>

            </div>
          </div>
        ))}
      </section>
    </div>
  );
}