import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function Navbar() {
  return (
    <AppBar position="sticy">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LEMA DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
}
