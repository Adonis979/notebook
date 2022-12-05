import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";

const AddNoteModal = (props) => {
  const [noteDescription, setNoteDescription] = useState({
    title: "",
    description: "",
    dateCreated: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    category: "",
    id: uuidv4(),
  });

  const handleChange = (event) => {
    let data = { ...noteDescription };
    data[event.target.name] = event.target.value;
    setNoteDescription(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = { ...noteDescription, id: uuidv4() };
    props.addNote(data);
  };

  return (
    <Modal
      size="lg"
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="example-modal-sizes-noteDescription-lg"
    >
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <input
            name="title"
            type="text"
            className="form-control m-2"
            placeholder="Title"
            required
            onChange={(event) => handleChange(event)}
          />
          <select
            name="category"
            className="form-select m-2"
            aria-label="Default select example"
            onChange={(event) => handleChange(event)}
            required
            defaultValue="Deafult"
          >
            <option value="Default">Choose item...</option>
            <option value="Reminders">Reminders</option>
            <option value="Work">Work</option>
            <option value="Quotes">Quotes</option>
            <option value="Shopping List">Shopping Lists</option>
          </select>
        </Modal.Header>
        <Modal.Body>
          <label>What's on your mind: </label>
          <div className="form-group">
            <textarea
              name="description"
              onChange={(event) => handleChange(event)}
              className="form-control"
              rows="12"
              required
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={props.onHide}
            type="submit"
          >
            Add
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddNoteModal;
