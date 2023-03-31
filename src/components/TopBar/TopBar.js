import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Rick&Morty
            </Link>
          </Typography>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Button color="inherit" to="/">
              Inicio
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
