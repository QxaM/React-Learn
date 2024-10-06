import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import Section from "../Section/Section.jsx";

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
