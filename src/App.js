// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./pages/Navbar/NavBar";
// import Home from "./pages/Home/Home";
// import Footer from "./pages/Footer/Footer";
// import About from "./pages/About/About";
// import Gallery from "./pages/Gallery/Gallery";
// import Press from "./pages/Press/Press";
// import Contact from "./pages/Contact/Contact";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//           <Route path="/" element={ <Home/>}/>
//           <Route path="/about" element={<About/>}></Route>
//           <Route path="/gallery" element={<Gallery/>}></Route>
//           <Route path="/press" element={<Press/>}></Route>
//            <Route path="/contact" element={<Contact/>}></Route>
          
//       </Routes>
//        <Footer/>
//     </BrowserRouter>
    
//   );
// };

// export default App;






import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Navbar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Press from "./pages/Press/Press";
import Contact from "./pages/Contact/Contact";
import { LanguageProvider } from "./pages/LanguageContext/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
