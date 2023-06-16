import { Stack } from "@mui/material";
import Input from "../Common/Input";

export default function PersonalForm() {
    return (
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
            <Input
                typeForm={"input"}
                type={"text"}
                label={"First Name"}
                half
            />
            <Input
                typeForm={"input"}
                type={"text"}
                label={"Last Name"}
                half
            />
            <Input
                typeForm={"input"}
                type={"email"}
                label={"Email"}
                full
            />
        </Stack>
    )
}
