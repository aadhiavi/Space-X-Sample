
import './App.css';
import ScrollToTop from './Components/ScollToTop';

import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Training from './Pages/Training/Training';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Training' element={<Training />} />
            <Route path='/Pricing' element={<Pricing />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
