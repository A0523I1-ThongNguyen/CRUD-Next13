"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  showModalDelete: boolean;
  setShowModalDelete: (value: boolean) => void;
  blog: IBlog | null;
  id: number;
}

function DeleteModal(props: IProps) {
  const { showModalDelete, setShowModalDelete, blog, id } = props;

  const handleDeleteBlog = (id: number) => {
    console.log("id", id);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("delete the blog successfully");
          handleCloseModal();
          mutate("http://localhost:8000/blogs"); // call back api
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleCloseModal = () => {
    // setTitle("");
    // setAuthor("");
    // setContent("");
    // setBlog(null); // useEffect
    setShowModalDelete(false);
  };

  return (
    <>
      <Modal show={showModalDelete} onHide={() => handleCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete the blog{" "}
          <span className="text-red-500">{blog?.title} </span>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDeleteBlog(id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
