export const AmountText = ({ tipAmount }) => {
    return (
        <div className="text-amount">
            <div>
                <h2>Tip Amount</h2>
                <p>/ person</p>
            </div>
            <h3>${tipAmount && !isNaN(tipAmount) ? <span id="tip-amount">{tipAmount.toFixed(2)}</span> : '0.00'}</h3>
        </div>
    );
}