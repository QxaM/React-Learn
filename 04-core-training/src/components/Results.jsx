import { formatter, calculateInvestmentResults } from "../util/investment";

const Results = ({ inputs }) => {
  const results = calculateInvestmentResults(inputs);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead className="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="center">
        {results.map((value) => {
          const totalInterest =
            value.valueEndOfYear -
            value.annualInvestment * value.year -
            initialInvestment;

          const totalAmountInvested = value.valueEndOfYear - totalInterest;

          return (
            <tr key={value.year}>
              <td>{value.year}</td>
              <td>{formatter.format(value.valueEndOfYear)}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
