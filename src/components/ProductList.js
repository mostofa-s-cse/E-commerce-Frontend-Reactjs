import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  async function AllProduct() {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      // console.log('rrrrr',response.data.products);
      setData(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteProduct(id) {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/productdelete/${id}`
      );
      alert(response.data.message);
      navigate("/productList");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
      // alert(error);
    }
  }
  useEffect(() => {
    AllProduct();
  }, []);
  console.log("prosuct", data);
  return (
    <div className="container">
      <div className="m-auto mt-5">
        <h1 className="mb-4 text-center">Product List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  {" "}
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={"http://localhost:8000/storage/" + item.image}
                  />
                </td>
                <td>
                  <div className="d-flex">
                    <a href={`/update/${item.id}`} className="btn btn-success">
                      Update
                    </a>
                    <Button
                      variant="danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
