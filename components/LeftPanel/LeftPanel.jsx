import { useContext } from "react";
import { MultiStepContext } from "@/context/MultiStepContext";
import { Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function LeftPanel() {
  const { formInfo } = useContext(MultiStepContext);

  const subtitleColor = deepPurple["300"];
  const typographyStyle = {
    fontSize: "18px",
    fontWeight: 500,
    paddingTop: "5px",
  };

  const fullName = `${formInfo.firstName} ${formInfo.lastName}`;

  return (
    <Stack direction={"column"}>
      <Typography variant="h4" marginBottom={3}>
        {fullName === " " ? "Mohammad Ahrari" : fullName}
      </Typography>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="subtitle1" color={subtitleColor}>
          Email
        </Typography>
        <Typography sx={typographyStyle}>{formInfo.email}</Typography>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="subtitle1" color={subtitleColor}>
          Phone
        </Typography>
        <Typography sx={typographyStyle}>{formInfo.phone}</Typography>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="subtitle1" color={subtitleColor}>
          Address
        </Typography>
        <Typography sx={typographyStyle}>{formInfo.address}</Typography>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="subtitle1" color={subtitleColor}>
          Message
        </Typography>
        <Typography sx={typographyStyle}>{formInfo.message}</Typography>
      </div>
    </Stack>
  );
}
