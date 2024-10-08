import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [input, setInput] = useState(INITIAL_STATE);

  const inputIsValid = input.duration > 0;

  const handleInputChange = (key, value) => {
    setInput((prevInput) => {
      return { ...prevInput, [key]: parseInt(value) };
    });
  };

  return (
    <>
      <UserInput inputs={input} handleInputChange={handleInputChange} />
      {inputIsValid && <Results inputs={input} />}
      {!inputIsValid && (
        <p className="center">Enter duration greater than 0!</p>
      )}
    </>
  );
}

export default App;
