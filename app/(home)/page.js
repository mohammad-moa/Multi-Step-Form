"use client";

import MultiStepProvider from "@/context/MultiStepContext";
import LeftPanel from "@/components/LeftPanel/LeftPanel";
import RightPanel from "@/components/RightPanel/RightPanel";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import { comfortaa } from "./layout";

const theme = createTheme({
  typography: {
    fontFamily: comfortaa.style.fontFamily,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <MultiStepProvider>
        <Grid container height={"100vh"} justifyContent={"center"}>
          <Grid item lg={3} bgcolor={"#ede7f6b3"} p={"45px 30px"}>
            <LeftPanel />
          </Grid>
          <Grid item lg={9} p={"45px 70px"}>
            <RightPanel />
          </Grid>
        </Grid>
      </MultiStepProvider>
    </ThemeProvider>
  );
}
