export const TotalAmount = ({ totalAmount }) => {
    return (
        <div className="total-amount">
            <div>
                <h2>Total</h2>
                <p>/ person</p>
            </div>
            <h3>$<span id="total">{totalAmount.toFixed(2)}</span></h3>
        </div>
    );
}