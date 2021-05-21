import React from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";

const Upload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProduct = (data) => {
    console.log("data", data);
  };

  return (
    <div className="upload">
      <h2 className="secondary-heading">Subir Producto</h2>
      <div className="upload__images">
        <div className="upload__imgs-input">
          <FaUpload className="upload__imgs-input-icon" />
        </div>
        <div className="upload__imgs-output"></div>
      </div>
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
        <div className="btn" type="submit">
          Submit
        </div>
      </form>
    </div>
  );
};

export default Upload;
