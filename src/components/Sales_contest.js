import React, { useState } from "react";
import "./Sales_contest.css";
import notebook from "../images/notebook.svg";
import pixel8 from "../images/pixel_8.svg";
import pixel8pro from "../images/pixel_8_pro.png";
import buds_pro from "../images/buds_pro.svg";
import pixel_tablet from "../images/pixel_tablet.svg";
import pixel_watch from "../images/pixel_watch.svg";

const SalesContest = () => {
  const [selectedRetailer, setSelectedRetailer] = useState("");
  const [date, setDate] = useState("");
  const [storeName, setStoreName] = useState("");
  const [campaign, setCampaign] = useState("");
  const [imeiList, setImeiList] = useState("");
  const [unitsSold, setUnitsSold] = useState(3);
  const [product, setProduct] = useState("");

  const handleRetailerChange = (e) => setSelectedRetailer(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleStoreNameChange = (e) => setStoreName(e.target.value);
  const handleCampaignChange = (e) => setCampaign(e.target.value);
  const handleImeiListChange = (e) => setImeiList(e.target.value);
  const incrementUnits = () => setUnitsSold(unitsSold + 1);
  const decrementUnits = () => setUnitsSold(unitsSold > 0 ? unitsSold - 1 : 0);

  return (
    <div className="sales_form">
      <div className="form_subheading">
        <img src={notebook}></img>
        <h2>Sell-out Information</h2>
      </div>
      <form className="product-form">
        <label className="input-level-group">
          <p>Retailers:</p>
          <select value={selectedRetailer} onChange={handleRetailerChange}>
            <option value="">Select Retailer</option>
            <option value="retailer1">Retailer 1</option>
            <option value="retailer2">Retailer 2</option>
          </select>
        </label>
        <label className="input-level-group">
          <p>Date:</p>
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <label className="input-level-group">
          <p>Store Name:</p>
          <select value={storeName} onChange={handleStoreNameChange}>
            <option value="">Select Store</option>
            <option value="store1">Store 1</option>
            <option value="store2">Store 2</option>
          </select>
        </label>
        <label className="input-level-group">
          <p>Campaigns:</p>
          <select value={campaign} onChange={handleCampaignChange}>
            <option value="">Select Campaign</option>
            <option value="campaign1">Campaign 1</option>
            <option value="campaign2">Campaign 2</option>
          </select>
        </label>
        <label className="input-level-group imei-no">
          <p>IMEI list:</p>
          <div>
            <input
              type="text"
              value={imeiList}
              onChange={handleImeiListChange}
              placeholder="Enter IMEI no."
            />
            <p>*write comma separated EMEI</p>
          </div>
        </label>
        <div className="product-selection">
          Choose product from Pixel Lineup
          <div>
            {/* Map through products if you have them in an array */}
            <button
              className="product-btn"
              onClick={() => setProduct("Pixel 8 Pro")}
            >
              <img src={pixel8pro}/>
            </button>
            <button
              className="product-btn"
              onClick={() => setProduct("Pixel 8")}
            >
              <img src={pixel8}/>
            </button>
            <button
              className="product-btn"
              onClick={() => setProduct("Pixel Buds Pro")}
            >
               <img src={pixel_tablet}/>
            </button>
            <button
              className="product-btn"
              onClick={() => setProduct("Pixel Buds Pro")}
            >
               <img src={buds_pro}/>
            </button>
            <button
              className="product-btn"
              onClick={() => setProduct("Pixel Buds Pro")}
            >
               <img src={pixel_watch}/>
            </button>
            {/* Add other products similarly */}
          </div>
        </div>
        <div className="counter-box">
          Units Sold:
          <button className="counter-btn" onClick={decrementUnits}>
            -
          </button>
          <span className="units-count">{unitsSold}</span>
          <button className="counter-btn" onClick={incrementUnits}>
            +
          </button>
        </div>
        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default SalesContest;
