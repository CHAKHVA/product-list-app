import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductList from "./pages/ProductList/ProductList";
import AddProduct from "./pages/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />}/>
          <Route path="/addproduct" element={<AddProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
