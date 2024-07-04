export const AmountText = ({ tipAmount }) => {
    return (
        <div className="text-amount">
            <div>
                <h2>Tip Amount</h2>
                <p>/ person</p>
            </div>
            <h3>$<span id="tip-amount">{tipAmount.toFixed(2)}</span></h3>
        </div>
    );
}