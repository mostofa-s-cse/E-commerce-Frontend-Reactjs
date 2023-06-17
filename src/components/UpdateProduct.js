import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const Getid = useParams();
  let id = Getid.id;
  //   console.log("id", id);
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function ProductUpdate() {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    // formData.append("price", price);
    formData.append("description", description);
    try {
      const response = await axios.put(`http://localhost:8000/api/productsupdate/${id}`, formData);
      alert(response.data.message);
      navigate("/productList");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
      // alert(error);
    }
  }
  async function GetProduct() {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      console.log('rrrrr',response.data.product);
      setData(response.data.product);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    GetProduct();
  }, [id]);
  return (
    <div className="col-md-6 m-auto">
      <div className="mt-5 shadow p-5">
        <h1 className="mb-5 text-center">Update Product</h1>
        <input
          type="text"
          defaultValue={data.name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          defaultValue={data.price}
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
        <img
          style={{ height: "100px", width: "100px" }}
          src={"http://localhost:8000/storage/" + data.image}
        />
        <br />
        <textarea
          type="text"
          defaultValue={data.description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="description"
        />
        <br />
        <button onClick={ProductUpdate} className="btn btn-primary">
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
