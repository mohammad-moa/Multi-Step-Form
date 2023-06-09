import { Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function LeftPanel() {

    const subtitleColor = deepPurple["300"]
    const typographyStyle = {
        fontSize: "18px",
        fontWeight: 500,
        paddingTop: "5px"
    }

    return (
        <Stack
            direction={"column"}
        >
            <Typography variant="h4" marginBottom={3}>
                Mohammad Ahrari
            </Typography>

            <div style={{ marginTop: "20px" }}>
                <Typography variant="subtitle1" color={subtitleColor}>
                    Email
                </Typography>
                <Typography sx={typographyStyle}>
                    aahrari5@gmail.com
                </Typography>
            </div>

            <div style={{ marginTop: "20px" }}>
                <Typography variant="subtitle1" color={subtitleColor}>
                    Phone
                </Typography>
                <Typography sx={typographyStyle}>
                    09170000000
                </Typography>
            </div>

            <div style={{ marginTop: "20px" }}>
                <Typography variant="subtitle1" color={subtitleColor}>
                    Address
                </Typography>
                <Typography sx={typographyStyle}>
                    Iran - Fars - Lar
                </Typography>
            </div>

            <div style={{ marginTop: "20px" }}>
                <Typography variant="subtitle1" color={subtitleColor}>
                    Message
                </Typography>
                <Typography sx={typographyStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil hic aliquid, praesentium magnam ...
                </Typography>
            </div>
        </Stack>
    )
}