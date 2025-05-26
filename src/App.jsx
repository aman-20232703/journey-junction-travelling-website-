import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Conponents/About/About";
import Contact from "./Conponents/Contact/Contact";
import Footer from "./Conponents/Folder/Footer";
import Home from "./Conponents/Home/Home";
import Navbar from "./Conponents/Navbar/Navbar";
import Service from "./Conponents/Serv/Service";
import DarjeelingPage from "./Conponents/Pagess/DarjeelingPage";
import ManaliPage from "./Conponents/Pagess/ManaliPage";
import PuriPage from "./Conponents/Pagess/PuriPage";
import LoginRegister from "./Conponents/LoginRegister/LoginRegister";

function App() {
  return (
    <Router>
      <div className="w-full h-auto overflow-hidden bg-[#ffffff]">
        <Navbar />
        
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
              
                <Service/>
                <Contact />
                
              </>
            }
          />
          
          {/* Other Pages */}
        
          <Route path="/darjeeling" element={<DarjeelingPage />} />
          <Route path="/manali" element={<ManaliPage />} />
          <Route path="/puri" element={<PuriPage />} />
          <Route path="/LoginRegister" element={<LoginRegister/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
