export const TotalAmount = ({ totalAmount }) => {
    return (
        <div className="total-amount">
            <div>
                <h2>Total</h2>
                <p>/ person</p>
            </div>
            <h3>$<span id="total">{totalAmount && !isNaN(totalAmount) ? totalAmount.toFixed(2) : '0.00'}</span></h3>
        </div>
    );
}