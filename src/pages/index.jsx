import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AboutMe from "../components/AboutMe";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const index = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AboutMe />
    </ThemeProvider>
  );
};

export default index;
