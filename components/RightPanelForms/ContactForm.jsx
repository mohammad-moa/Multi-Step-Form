import { useContext } from "react";
import { MultiStepContext } from "@/context/MultiStepContext";
import { Stack } from "@mui/material";
import Input from "../Common/Input";

export default function ContactForm() {
  const { formInfo, changeHandler } = useContext(MultiStepContext);
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
      <Input
        typeForm={"input"}
        type={"number"}
        name={"phone"}
        value={formInfo.phone}
        onChange={changeHandler}
        label={"Phone Number"}
        full
      />
      <Input
        typeForm={"input"}
        type={"text"}
        name={"address"}
        value={formInfo.address}
        onChange={changeHandler}
        label={"Address"}
        full
      />
    </Stack>
  );
}
