import { useContext } from "react";
import { MultiStepContext } from "@/context/MultiStepContext";
import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import MessageForm from "./MessageForm";
import PersonalForm from "./PersonalForm";
import { deepPurple } from "@mui/material/colors";

export default function RightPanelForms() {
  const { activeStep, steps } = useContext(MultiStepContext);

  return (
    <>
      <Box>
        <Typography variant="subtitle1" color={deepPurple["200"]}>
          Step {activeStep}
        </Typography>
        <Typography variant="h4" mt={1} fontWeight={500}>
          {steps[activeStep - 1]} Info
        </Typography>
      </Box>
      <PersonalForm />
      {/* <ContactForm /> */}
      {/* <MessageForm /> */}
    </>
  );
}
