import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

const NoteDescription = (props) => {
  let firstSpecificNote = props.specificNote[0];

  const [updateNote, setUpdateNote] = useState({ ...firstSpecificNote });

  useEffect(() => {
    setUpdateNote(firstSpecificNote);
  }, [firstSpecificNote]);

  const handleChange = (event) => {
    let data = { ...updateNote };
    data[event.target.name] = event.target.value;
    setUpdateNote(data);
  };

  return (
    <div>
      <Card className="m-2">
        <Card.Body>
          <Card.Title>
            <input
              value={updateNote.title}
              name="title"
              style={{ fontSize: 30 }}
              type="email"
              className="form-control bg-light"
              onChange={(event) => handleChange(event)}
            ></input>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {`${updateNote.category} · ${updateNote.dateCreated}`}
          </Card.Subtitle>
          <Card.Text>
            <textarea
              name="description"
              style={{ fontFamily: "initial" }}
              value={updateNote.description}
              className="form-control bg-light"
              rows="12"
              onChange={(event) => handleChange(event)}
            ></textarea>
          </Card.Text>
          <button
            onClick={() => props.change(updateNote, updateNote.id)}
            className="btn btn-success"
          >
            Update
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default NoteDescription;
