import InputGroup from "./InputGroup";

const INPUTS = [
  [
    {
      title: "Initial Investment",
      key: "initialInvestment",
    },
    {
      title: "Annual Investment",
      key: "annualInvestment",
    },
  ],
  [
    {
      title: "Expected Ruturn",
      key: "expectedReturn",
    },
    {
      title: "Duration",
      key: "duration",
    },
  ],
];

const UserInput = ({ inputs, handleInputChange }) => {
  return (
    <section id="user-input">
      <InputGroup
        inputsArray={INPUTS[0]}
        values={inputs}
        handleInputChange={handleInputChange}
      />
      <InputGroup
        inputsArray={INPUTS[1]}
        values={inputs}
        handleInputChange={handleInputChange}
      />
    </section>
  );
};

export default UserInput;
