import { useContext } from "react";
import { MultiStepContext } from "@/context/MultiStepContext";
import { Stack } from "@mui/material";
import Input from "../Common/Input";

export default function PersonalForm() {
  const { formInfo, changeHandler } = useContext(MultiStepContext);

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
      <Input
        typeForm={"input"}
        type={"text"}
        name={"firstName"}
        value={formInfo.firstName}
        onChange={changeHandler}
        label={"First Name"}
        half
      />
      <Input
        typeForm={"input"}
        type={"text"}
        name={"lastName"}
        value={formInfo.lastName}
        onChange={changeHandler}
        label={"Last Name"}
        half
      />
      <Input
        typeForm={"input"}
        type={"email"}
        name={"email"}
        value={formInfo.email}
        onChange={changeHandler}
        label={"Email"}
        full
      />
    </Stack>
  );
}
