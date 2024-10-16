import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export const useAccordionItemContext = () => {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "Accordion item related components must be wrapped with <Accordion.Item></Accordion.Item>"
    );
  }

  return ctx;
};

const AccordionItem = ({ id, className, children }) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
