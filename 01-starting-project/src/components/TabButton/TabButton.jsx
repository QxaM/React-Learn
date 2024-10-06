import "./TabButton.css";

const TabButton = ({ onClick, children, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
