import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FileUpload from "./FileUpload";
import api from "../../apis/products";

const UploadProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);

  const submitProduct = (data) => {
    const { name, description, price } = data;

    if (!name || !description || !price || !images) {
      return alert("fill all the fields first!");
    }

    const variables = {
      // writer: props.user.userData._id,
      name,
      description,
      price,
      images,
    };

    console.log("variables ", variables);
    api.post("/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  return (
    <div className="upload">
      <h2 className="secondary-heading">Subir Producto</h2>
      <FileUpload refreshFunction={updateImages} />
      <form onSubmit={handleSubmit(submitProduct)} className="upload__form">
        <div>
          <label>Nombre</label>
          <input
            className="upload__input"
            {...register("name", { required: true })}
            type="text"
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            className="upload__input"
            {...register("description", { required: true })}
            type="text"
          />
        </div>

        <div>
          <label>Precio(S/.)</label>
          <input
            min="0"
            className="upload__input"
            {...register("price", { required: true })}
            type="number"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
