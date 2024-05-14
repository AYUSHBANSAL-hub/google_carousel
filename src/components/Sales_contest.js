import React, { useState } from 'react';

const SalesContest = () => {
    const [selectedRetailer, setSelectedRetailer] = useState('');
    const [date, setDate] = useState('');
    const [storeName, setStoreName] = useState('');
    const [campaign, setCampaign] = useState('');
    const [imeiList, setImeiList] = useState('');
    const [unitsSold, setUnitsSold] = useState(3);
    const [product, setProduct] = useState('');

    const handleRetailerChange = (e) => setSelectedRetailer(e.target.value);
    const handleDateChange = (e) => setDate(e.target.value);
    const handleStoreNameChange = (e) => setStoreName(e.target.value);
    const handleCampaignChange = (e) => setCampaign(e.target.value);
    const handleImeiListChange = (e) => setImeiList(e.target.value);
    const incrementUnits = () => setUnitsSold(unitsSold + 1);
    const decrementUnits = () => setUnitsSold(unitsSold > 0 ? unitsSold - 1 : 0);

    return (
        <form className="product-form">
            <h2>Sell-out Information</h2>
            <label>
                Retailers:
                <select value={selectedRetailer} onChange={handleRetailerChange}>
                    <option value="">Select Retailer</option>
                    <option value="retailer1">Retailer 1</option>
                    <option value="retailer2">Retailer 2</option>
                </select>
            </label>
            <label>
                Date:
                <input type="date" value={date} onChange={handleDateChange} />
            </label>
            <label>
                Store Name:
                <select value={storeName} onChange={handleStoreNameChange}>
                    <option value="">Select Store</option>
                    <option value="store1">Store 1</option>
                    <option value="store2">Store 2</option>
                </select>
            </label>
            <label>
                Campaigns:
                <select value={campaign} onChange={handleCampaignChange}>
                    <option value="">Select Campaign</option>
                    <option value="campaign1">Campaign 1</option>
                    <option value="campaign2">Campaign 2</option>
                </select>
            </label>
            <label>
                IMEI list:
                <input type="text" value={imeiList} onChange={handleImeiListChange} placeholder="Enter IMEI no." />
            </label>
            <div>
                Choose product from Pixel Lineup:
                <div>
                    {/* Map through products if you have them in an array */}
                    <button type="button" onClick={() => setProduct('Pixel 8 Pro')}>Pixel 8 Pro</button>
                    <button type="button" onClick={() => setProduct('Pixel 8')}>Pixel 8</button>
                    <button type="button" onClick={() => setProduct('Pixel Buds Pro')}>Pixel Buds Pro</button>
                    {/* Add other products similarly */}
                </div>
            </div>
            <div>
                Units Sold:
                <button type="button" onClick={decrementUnits}>-</button>
                <span>{unitsSold}</span>
                <button type="button" onClick={incrementUnits}>+</button>
            </div>
            <button type="submit">Update</button>
        </form>
    );
};

export default SalesContest;
