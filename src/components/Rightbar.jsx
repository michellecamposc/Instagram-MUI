import React from "react";
import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor={"lightcoral"}
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
