export const Custom = ({ handleCustomTip }) => {
    return (
        <li>
            <input
                type="number"
                placeholder="Custom"
                id="custom-percentage-button"
                className="percentage-button"
                onChange={(e) => handleCustomTip(parseInt(e.target.value))}
            />
        </li>
    );
}