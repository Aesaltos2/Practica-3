import React from 'react';

export const DataWrapper = ({ billAmount, setBillAmount, percentageValue, handleTip, peopleCount, setPeopleCount, children }) => {
    return (
        <div className="data-wrapper">
            <h3>Bill</h3>
            <label htmlFor="input-bill">
                <input
                    className="input-bill"
                    type="number"
                    value={billAmount}
                    min="0"
                    onChange={(e) => setBillAmount(parseFloat(e.target.value))}
                />
            </label>
            <h2>Select Tip %</h2>
            {children}
            <h2>Number of People</h2>
            <label htmlFor="input-people">
                <input
                    id="input-people"
                    className="input-people"
                    type="number"
                    value={peopleCount}
                    min="1"
                    onChange={(e) => setPeopleCount(parseFloat(e.target.value))}
                />
            </label>
        </div>
    );
}