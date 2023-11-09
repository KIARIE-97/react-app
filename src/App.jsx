import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
   <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/services" element= {<Services/>}/>
      <Route path="/contacts" element= {<Contacts/>}/>
     
    </Routes>
    {/* <Footer/> */}
  </Router>
   </>
  )
}

export default App;
