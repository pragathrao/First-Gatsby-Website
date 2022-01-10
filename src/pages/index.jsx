import * as React from "react"
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Hero from "../Components/Hero/Hero";
import Header from "../Components/Header/Header";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";


let darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
darkTheme = responsiveFontSizes(darkTheme)

function index() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Header />
        <Hero />
        <Projects />
        <Footer/>
      </CssBaseline>
    </ThemeProvider>


  )
}

export default index
