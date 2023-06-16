import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import MessageForm from "./MessageForm";
import PersonalForm from "./PersonalForm";
import { deepPurple } from "@mui/material/colors";

export default function RightPanelForms() {
    return (
        <>
            <Box>
                <Typography variant="subtitle1" color={deepPurple["200"]}>
                    Step 1
                </Typography>
                <Typography variant="h4" mt={1} fontWeight={500}>
                    Personal Info
                </Typography>
            </Box>
            <PersonalForm />
            {/* <ContactForm /> */}
            {/* <MessageForm /> */}
        </>
    )
}
