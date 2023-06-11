"use client"

import { useId } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

export default function Input({ typeForm, type, label, full, half }) {

    const customId = useId()

    return (
        <FormControl color="secondary" sx={{ mt: 4, width: full ? "100%" : half ? "48.3%" : "" }}>
            {
                typeForm === "input"
                    ? (
                        <>
                            <InputLabel htmlFor={customId}>{label}</InputLabel>
                            <OutlinedInput
                                type={type}
                                id={customId}
                                label={label}
                            />
                        </>
                    ) : (
                        <>
                            <InputLabel htmlFor={customId}>{label}</InputLabel>
                            <OutlinedInput
                                multiline
                                id={customId}
                                label={label}
                                minRows={4}
                                maxRows={4}
                            />
                        </>
                    )
            }
        </FormControl>

    )
}
