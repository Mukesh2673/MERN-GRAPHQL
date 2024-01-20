import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { GET_PUBLIC_FILE } from "../../graphql/query";
import AddPublicFile from "../publicFile/addPublicFile";
import { REMOVE_PUBLIC_FILE } from "../../graphql/query";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

import "./style.css";
const PublicFile = () => {
  const dispatch = useDispatch();
  const { loading, error, data, refetch } = useQuery(GET_PUBLIC_FILE);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  if (!loading && !error) {
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: data?.publicFiles });
  }
  const [deletePublicFile] = useMutation(REMOVE_PUBLIC_FILE, {
    refetchQueries: [{ query: GET_PUBLIC_FILE }], // Replace with the actual query that fetches users
  });

  const handleShow = () => setShow(true);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const handleCallbackFromChild = (message) => {
    // Do something with the message received from the child
    refetch();
    setShow(false);
  };
  const remove = async (id) => {
    await deletePublicFile({
      variables: { id: id },
    });
  };

  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="row mt-5">
          <div className="parent" key={data.id}>
            {data?.publicFiles?.map((data) => (
              <Card
                style={{
                  width: "18rem",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150/0000FF/808080 ?Text=PAKAINFO.com"
                />
                <Card.Body>
                  <Card.Title>{data.fileName}</Card.Title>
                  <Card.Text>
                    <div className="buttons">
                      <span className="badge rounded-pill bg-primary">
                        {data.lastUsed}
                      </span>
                      <span className="badge rounded-pill bg-danger">
                        {data.url}
                      </span>
                      <span className="badge rounded-pill bg-secondary">
                        {data.uploadDate}
                      </span>
                    </div>
                  </Card.Text>
                  <Button
                    variant="primary btn select"
                    onClick={() => remove(data.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        <button className="btn btn-primary custom-button" onClick={handleShow}>
          ADD
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Public File</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddPublicFile onCallback={handleCallbackFromChild} />
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Modal>
      </div>
    </>
  );
};

export default PublicFile;
