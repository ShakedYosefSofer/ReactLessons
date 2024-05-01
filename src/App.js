import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Header1 from "./components/Header1";
import Page404 from "./pages/Page404";
import Vip from "./pages/Vip";
import VipInfo from "./pages/VipInfo";
import Toys from "./pages/Toys";
import Pixa from "./pages/Pixa";


function App() {
  return (
    <BrowserRouter>
      <Header1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vip" element={<Vip />} />
        <Route path="/vip/:rank" element={<VipInfo />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/pixa" element={<Pixa />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
