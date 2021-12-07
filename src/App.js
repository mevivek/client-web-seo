import './App.css';
import Home from './screens/home/Home';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './screens/catalogue/Catalogue';
import ProductDetails from './screens/details/ProductDetails';
import { Helmet } from 'react-helmet';

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalogue" element={<Catalogue />} />
    <Route path="/catalogue/:slug" element={<ProductDetails />} />
  </Routes>;
}

export default App;
