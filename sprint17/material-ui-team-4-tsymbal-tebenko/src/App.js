import { ThemeProvider } from "@mui/material";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import theme from "./styles";

export default function App() {
   return <ThemeProvider theme={theme}>
            <Header />
            <Banner/>
            <Content/>
            <Footer/>
          </ThemeProvider>
}
