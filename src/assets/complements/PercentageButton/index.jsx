export const PercentageButton = ({ onClick, selectedTip, children }) => {
  const percentages = [5, 10, 15, 25, 50];
  return (
    <ul>
      {percentages.map((value) => (
        <li key={value} id={`percentage-${value}`}>
          <button
            type="button"
            className={`percentage-button ${selectedTip === value ? 'active' : ''}`}
            value={value}
            onClick={() => onClick(value)}
          >
            {value}%
          </button>
        </li>
      ))}
      {children}
    </ul>
  );
}