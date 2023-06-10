import { useState } from "react";
import { Table } from "react-bootstrap";

function SearchProduct() {
    const [data,setData] = useState([])
async function search(key)
 {
    let result = await fetch(`http://localhost:8000/api/search/${key}`); 
    result = await result.json();
    setData(result);
 }
  return (
    <div className="col-md-6 m-auto text-center">
      <div className="mt-5 p-5">
        <h1 className="mb-2">Search Product</h1>
        <input
          type="text"
          className="form-control mb-5"
          onChange={(e)=>search(e.target.value)}
          placeholder="Search Product"
        />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default SearchProduct;
