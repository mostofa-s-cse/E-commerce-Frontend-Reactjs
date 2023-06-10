import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
function ProductList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    async function AllProduct() {
      let result = await fetch("http://localhost:8000/api/list");
      let product = await result.json();
      setData(product);
    }
    AllProduct();
  }, []);
  console.log("prosuct", data);
  return (
    <div className="container">
      <div className="m-auto mt-5">
        <h1 className="mb-4 text-center">ProductList</h1>
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
                    src={"http://localhost:8000/" + item.image}
                  />
                </td>
                <td>
                  <div className="d-flex">
                    <Button variant="success">Edit</Button>
                    <Button variant="danger" style={{marginLeft:"10px"}}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
