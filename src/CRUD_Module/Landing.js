import { useEffect, useState } from "react";
import Table from "./Table";
import Form from "./Form";
import { getData, deleteData } from "./Api";
const Landing = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await getData();
    console.log(res.data);
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    try {
      await deleteData(id);
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const showForm = () => {
    setOpenForm(true);
    setEditingProduct(null);
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  const updateProducts = () => {
    getProducts();
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setOpenForm(true);
  };
  return (
    <div>
      <center>
        <h2>Welcome to React CRUD Application</h2>
      </center>
      <div className="container">
        <button className="btn btn-primary" onClick={showForm}>
          Add Product
        </button>
      </div>
      {openForm && (
        <Form
          closeForm={closeForm}
          updateProducts={updateProducts}
          editingProduct={editingProduct}
        />
      )}

      <Table
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </div>
  );
};

export default Landing;
