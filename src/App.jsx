import "./App.css";
import { LandingProvider } from "./content/context";
import Footer from "./Footer/Footer";
//import Header from "./Header/Header";

import Main from "./Main/Main";
import Nav from "./Navbar/Nav";

function App() {
  return  (
    <LandingProvider classname="container" >
  <Nav />
  <Main />
  <Footer/>
  </LandingProvider>
)
}

export default App;
