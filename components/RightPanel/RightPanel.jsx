import { useContext } from "react";
import { MultiStepContext } from "@/context/MultiStepContext";
import { Box, Button, Typography } from "@mui/material";
import RightPanelForms from "../RightPanelForms";
import RightPanelSteps from "../RightPanelSteps";
import { grey } from "@mui/material/colors";

export default function RightPanel() {
  const { activeStep, setActiveStep, steps } = useContext(MultiStepContext);

  const nextStepHandler = () => {
    setActiveStep((prev) => prev + 1);
  };

  const backStepHandler = () => {
    setActiveStep((prev) => prev - 1);
  };

  return activeStep <= steps.length ? (
    <>
      <Box height={"17vh"} mb={2}>
        <RightPanelSteps />
      </Box>

      <Box height={"55vh"}>
        <RightPanelForms />
      </Box>

      {/* Next / Back Button Steps */}
      <Box display={"flex"} justifyContent={"flex-end"}>
        {activeStep > 1 ? (
          <Button
            color="secondary"
            size="large"
            sx={{ mr: 2 }}
            onClick={backStepHandler}
          >
            Back
          </Button>
        ) : (
          ""
        )}

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={nextStepHandler}
        >
          {activeStep === steps.length ? "Finish" : "Next"}
        </Button>
      </Box>
    </>
  ) : (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      height={"100%"}
    >
      <Typography variant="h5" fontWeight="600" color="secondary" width="100%">
        Thanks for sharing your comments with me
      </Typography>
      <Typography fontSize={14} color={grey[400]} width="100%">
        Mohammad Ahrari
      </Typography>
    </Box>
  );
}
