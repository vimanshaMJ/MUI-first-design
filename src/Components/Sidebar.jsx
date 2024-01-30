import { Box } from "@mui/material";
import React from "react";

export default function Sidebar() {
  return (
    <Box
      bgcolor="lightblue"
      flex={4}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
}
