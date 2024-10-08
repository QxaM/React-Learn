import "./CoreConcept.css";

//const CoreConcept = (props) => {
const CoreConcept = ({ title, description, image }) => {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
