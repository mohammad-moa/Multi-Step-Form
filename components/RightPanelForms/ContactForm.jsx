import { Stack } from "@mui/material";
import Input from "../Common/Input";

export default function ContactForm() {
    return (
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
            <Input
                typeForm={"input"}
                type={"number"}
                label={"Phone Number"}
                full
            />
            <Input
                typeForm={"input"}
                type={"text"}
                label={"Address"}
                full
            />
        </Stack>
    )
}
