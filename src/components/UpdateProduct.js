import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function UpdateProduct() {
  const id = useParams();
  //   console.log("id", id);
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function UpdateProduct() {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    let result = await fetch(`http://localhost:8000/api/updateproduct/${id.id}`, {
      method: "PUT",
      // body:JSON.stringify(formData),
      body: formData,
    });
    alert("data has been saved");
    navigate("/productList");
  }
  useEffect(async () => {
    let result = await fetch(
      `http://localhost:8000/api/product/${id.id}`
    );
    result = await result.json();
    setData(result);
  }, []);
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
          src={"http://localhost:8000/" + data.image}
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
        <button onClick={UpdateProduct} className="btn btn-primary">
          Update Product
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
