"use client"

import LeftPanel from "@/components/LeftPanel/LeftPanel";
import RightPanel from "@/components/RightPanel/RightPanel";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container height={"100vh"}>
      <Grid item lg={3}>
        <LeftPanel />
      </Grid>
      <Grid item lg={9}>
        <RightPanel />
      </Grid>
    </Grid>
  )
}
