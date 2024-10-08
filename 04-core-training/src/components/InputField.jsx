const InputField = ({ valueKey, title, value, handleChange }) => {
  return (
    <p>
      <label>{title}</label>
      <input
        onChange={(event) => handleChange(valueKey, event.target.value)}
        type="number"
        value={value}
        required
      ></input>
    </p>
  );
};

export default InputField;
