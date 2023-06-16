import { createContext, useState } from "react";

export const MultiStepContext = createContext({});

export default function MultiStepProvider({ children }) {
  const steps = ["Personal", "Contact", "Message"];
  const [activeStep, setActiveStep] = useState(1);

  return (
    <MultiStepContext.Provider value={{ steps, activeStep, setActiveStep }}>
      {children}
    </MultiStepContext.Provider>
  );
}
