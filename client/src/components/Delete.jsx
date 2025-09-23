import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { deleteStudent } from "./Service";

const Delete = ({ id,showAlert }) => {

  const handleDelete = async (e) => {
    try {
      const response = await deleteStudent(id);
      showAlert(response, "success", "error");
    } catch (error) {
      showAlert(error.response || error, "success", "error");
    }
  };

  return (
      <button onClick={handleDelete}>
        <MdDeleteOutline className="size-5" />
      </button>
  );
};

export default Delete;
