"use client"

import LeftPanel from "@/components/LeftPanel/LeftPanel";
import RightPanel from "@/components/RightPanel/RightPanel";
import { Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function Home() {
  return (
    <Grid container height={"100vh"}>
      <Grid item lg={3} bgcolor={"#ede7f6b3"} padding={"45px 30px"}>
        <LeftPanel />
      </Grid>
      <Grid item lg={9} padding={"45px 30px"}>
        <RightPanel />
      </Grid>
    </Grid>
  )
}
