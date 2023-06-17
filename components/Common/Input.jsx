"use client";

import { useId } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

export default function Input({
  typeForm,
  type,
  name,
  value,
  onChange,
  label,
  full,
  half,
}) {
  const customId = useId();

  return (
    <FormControl
      color="secondary"
      sx={{ mt: 4, width: full ? "100%" : half ? "48.3%" : "" }}
    >
      {typeForm === "input" ? (
        <>
          <InputLabel htmlFor={customId}>{label}</InputLabel>
          <OutlinedInput
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            id={customId}
            label={label}
          />
        </>
      ) : (
        <>
          <InputLabel htmlFor={customId}>{label}</InputLabel>
          <OutlinedInput
            multiline
            name={name}
            value={value}
            onChange={onChange}
            id={customId}
            label={label}
            minRows={4}
            maxRows={4}
          />
        </>
      )}
    </FormControl>
  );
}
