import { useContext } from "react";
import { MultiStepContext } from "@/context/MultiStepContext";
import { Stack } from "@mui/material";
import Input from "../Common/Input";

export default function MessageForm() {
  const { formInfo, changeHandler } = useContext(MultiStepContext);
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
      <Input
        typeForm={"textarea"}
        name={"message"}
        value={formInfo.message}
        onChange={changeHandler}
        label={"Message"}
        full
      />
    </Stack>
  );
}
