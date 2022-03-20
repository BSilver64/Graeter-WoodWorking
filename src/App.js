import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/pages/Home'
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';
import ScrollToTop from './components/ScrollToTop';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  return (
    <>
    <BrowserRouter>
       <ScrollToTop />
      
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/Gallery" element={<Gallery />}/>
          <Route path="/Contact" element={<Contact />}/>
         </Routes>
         
      </BrowserRouter>


    </>
  );
}

export default App;
