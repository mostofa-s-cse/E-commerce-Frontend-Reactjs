import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function AddProduct() {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    try {
      const response = await axios.post("http://localhost:8000/api/products", formData);
      alert(response.data.message);
      navigate("/productList");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
      // alert(error);
    }
  }

  // async function AddProduct() {
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   formData.append("name", name);
  //   formData.append("price", price);
  //   formData.append("description", description);

  //   let result = await fetch("http://localhost:8000/api/products", {
  //     method: "POST",
  //     // body:JSON.stringify(formData),
  //     body: formData,
  //   });
  //   alert("data has been saved");
  //   navigate("/productList");
  // }
  return (
    <div className="col-md-6 m-auto text-center">
      <div className="mt-5 shadow p-5">
        <h1 className="mb-5">Add Product</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          placeholder="price"
        />
        <br />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="form-control"
        />
        <br />
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="description"
        />
        <br />
        <button onClick={AddProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
