import { createContext, useState } from "react";

export const MultiStepContext = createContext({});

export default function MultiStepProvider({ children }) {
  const steps = ["Personal", "Contact", "Message"];
  const [activeStep, setActiveStep] = useState(1);

  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MultiStepContext.Provider
      value={{
        steps,
        activeStep,
        setActiveStep,
        formInfo,
        changeHandler,
      }}
    >
      {children}
    </MultiStepContext.Provider>
  );
}
