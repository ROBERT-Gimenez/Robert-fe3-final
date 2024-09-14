
import './App.css'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Favorite" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
