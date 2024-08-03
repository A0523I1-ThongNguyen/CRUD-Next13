// "use client";

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CreateModal from "./create.modal";
import { use, useState } from "react";
import UpdateModal from "./update.modal";
import Link from "next/link";
import DeleteModal from "./delete.modal";

interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [id, setId] = useState<number>(0);

  console.log("Check blogs data", blogs);
  return (
    <>
      <div className="my-2 d-flex justify-content-between">
        <p className=" underline font-bold  text-xl text-amber-700 pt-4">
          Table Blog
        </p>
        <Button variant="primary" onClick={() => setShowModalCreate(true)}>
          Add new blog
        </Button>
      </div>
      <Table striped bordered hover size="md">
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.content}</td>
                <td className="d-flex justify-content-center">
                  <Link className="btn btn-primary" href={`/blogs/${item.id}`}>
                    View
                  </Link>
                  <Button
                    variant="warning"
                    onClick={() => {
                      setShowModalUpdate(true);
                      setBlog(item);
                    }}
                    className="mx-3"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setShowModalDelete(true);
                      setId(item.id);
                      setBlog(item);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />

      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />

      <DeleteModal
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        blog={blog}
        id={id}
      />
    </>
  );
};
export default AppTable;
