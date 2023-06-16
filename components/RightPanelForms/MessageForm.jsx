import { Stack } from "@mui/material";
import Input from "../Common/Input";

export default function MessageForm() {
    return (
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
            <Input
                typeForm={"textarea"}
                label={"Message"}
                full
            />
        </Stack>
    )
}
