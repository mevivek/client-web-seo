import './App.css';
import Home from './screens/home/Home';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './screens/catalogue/Catalogue';
import ProductDetails from './screens/details/ProductDetails';
import { Helmet } from 'react-helmet';

function App() {
  return <Routes>
    <Helmet>
      <meta name="google-site-verification" content="_9K0rqB008VayXRnOX0UM5JRBw6forTqpRguAxT0tUI" />
    </Helmet>
    <Route path="/" element={<Home />} />
    <Route path="/catalogue" element={<Catalogue />} />
    <Route path="/catalogue/:slug" element={<ProductDetails />} />
  </Routes>;
}

export default App;
