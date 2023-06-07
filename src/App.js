import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

import Protected from "./components/Protected";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/add" element={< Protected Cmp={AddProduct} />}></Route>
        <Route path="/update" element={< Protected Cmp={UpdateProduct} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
