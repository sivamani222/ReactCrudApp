import React, { useState, useEffect } from "react";
import { postData, updateData } from "./Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = ({ closeForm, updateProducts, editingProduct }) => {
  const [productsData, setProductsData] = useState({
    name: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    if (editingProduct) {
      setProductsData({
        name: editingProduct.name,
        price: editingProduct.price,
        category: editingProduct.category,
      });
      toast.success("Product added successfully");
    }
  }, [editingProduct]);

  const inputChangeHandler = (e) => {
    setProductsData({ ...productsData, [e.target.name]: e.target.value });
  };

  const submitFormData = async (e) => {
    e.preventDefault();
    console.log(productsData);

    if (editingProduct) {
      await updateData(editingProduct.id, productsData);
    } else {
      await postData(productsData);
    }
    updateProducts();
    setProductsData({ name: "", price: "", category: "" });
    closeForm();
  };
  return (
    <div className="container">
      <div className="form-overlay">
        <form>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              name="name"
              className="form-control"
              onChange={inputChangeHandler}
              value={productsData.name}
            />
          </div>
          <div className="form-group mt-2">
            <label>Price</label>
            <input
              type="text"
              placeholder="Enter product price"
              name="price"
              className="form-control"
              onChange={inputChangeHandler}
              value={productsData.price}
            />
          </div>
          <div className="form-group mt-2">
            <label>Category</label>
            <select
              className="form-control"
              name="category"
              value={productsData.category}
              onChange={inputChangeHandler}
            >
              <option value="" disabled hidden>
                Select a category
              </option>
              <option value={"Electronics"}>Electronics</option>
              <option value={"Groceries"}>Groceries</option>
              <option value={"Clothing"}>Clothing</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button
                className="btn btn-sm btn-danger col-md-12 mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  closeForm();
                }}
              >
                Cancel
              </button>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-sm btn-success col-md-12 mt-2"
                onClick={submitFormData}
              >
                Submit
              </button>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Form;
