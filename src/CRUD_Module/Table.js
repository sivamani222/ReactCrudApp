import React from "react";

const Table = ({ products, deleteProduct, editProduct }) => {
  return (
    <div className="text-center container mt-5">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>
                {data.price}{" "}
                <span className="text-danger " style={{ fontWeight: "bold" }}>
                  ₹
                </span>{" "}
              </td>
              <td>{data.category}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => editProduct(data)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteProduct(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
