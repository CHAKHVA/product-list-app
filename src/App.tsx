import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductList from "./pages/ProductList/ProductList";
import AddProduct from "./pages/AddProduct/AddProduct";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
