import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';
import VipApi from './components/VipApi';
import ShopPage from './pages/ShopPage';
import Page404 from './pages/Page404';
import Query from './pages/Query';
import Games from './components/Games';


function App() { 
  return(
<BrowserRouter>
<header className="bg-warning p-2"> 
<div className="container">
  <Link to="/" className="btn btn-outline-dark me-2">Home</Link>
  <Link to="/vip" className="btn btn-outline-dark me-2">V.I.P</Link>
  <Link to="/shop/food" className="btn btn-outline-dark me-2">Food shop</Link>
  <Link to="/query?s=hello" className="btn btn-outline-dark me-2">Query</Link>
  <Link to="/games?year=2005" className="btn btn-outline-dark me-2">Games</Link>
  </div>
</header>
<Routes>
  <Route path="/" element={<Gallery />} />
  <Route path="/vip" element={<VipApi />} />
  <Route path="/shop/:category" element={<ShopPage/>} />
  <Route path="/query" element={<Query/>} />
  <Route path="/games" element={<Games/>} />
  <Route path="*" element={<Page404/>} />
</Routes>
 </BrowserRouter>
  );

}
export default App;