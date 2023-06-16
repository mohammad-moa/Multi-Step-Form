import { useContext } from "react";
import { MultiStepContext } from "@/context/MultiStepContext";
import { Step, StepLabel, Stepper } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function RightPanelSteps() {
  const { activeStep, steps } = useContext(MultiStepContext);

  return (
    <Stepper alternativeLabel activeStep={activeStep - 1}>
      {steps.map((label) => (
        <Step
          key={label}
          sx={{
            "& .MuiStepLabel-root .Mui-completed": {
              color: deepPurple["200"],
            },
            "& .MuiStepLabel-root .Mui-active": {
              color: deepPurple["700"],
            },
            "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
              display: "block",
            },
            "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
              display: "none",
            },
          }}
        >
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
