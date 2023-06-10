import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
function ProductList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    AllProduct();
   
  }, []);
  async function AllProduct() {
    let result = await fetch("http://localhost:8000/api/list");
    let product = await result.json();
    setData(product);
  }
  async function deleteProduct(id)
  {
      let result=await fetch(`http://localhost:8000/api/delete/${id}`,{
          method:'DELETE'
      });
      result= await result.json();
      alert(result.success)
      console.log("result.success",result)
      AllProduct();
    //   window.location.reload();
      
  }
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
                    <a href={`/update/${item.id}`} className="btn btn-success">Update</a>
                    <Button variant="danger" style={{marginLeft:"10px"}} onClick={()=>deleteProduct(item.id)}>Delete</Button>
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
