import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Products from "./Products"
import Header from "./Header"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
       
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
     </Routes>
     <Footer />
     </BrowserRouter>
     </div>
  );
}

export default App;
