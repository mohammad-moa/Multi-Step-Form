
import { Box, Button } from "@mui/material";
import RightPanelForms from "../RightPanelForms";
import RightPanelSteps from "../RightPanelSteps";

export default function RightPanel() {
    return (
        <>
            <Box height={"17vh"} mb={2}>
                <RightPanelSteps />
            </Box>

            <Box height={"55vh"}>
                <RightPanelForms />
            </Box>

            {/* Next / Back Button Steps */}
            <Box display={"flex"} justifyContent={"flex-end"}>
                <Button
                    color="secondary"
                    size="large"
                    sx={{ mr: 2 }}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                >
                    Next
                </Button>
            </Box>
        </>
    )
}