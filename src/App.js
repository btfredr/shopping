import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ShopContextProvider from "./context/ShopContextProvider";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
