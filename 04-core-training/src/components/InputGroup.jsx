import InputField from "./InputField";

const InputGroup = ({ inputsArray, values, handleInputChange }) => {
  return (
    <div className="input-group">
      {inputsArray.map((input) => (
        <InputField
          key={input.key}
          valueKey={input.key}
          title={input.title}
          value={values[input.key]}
          handleChange={handleInputChange}
        />
      ))}
    </div>
  );
};

export default InputGroup;
