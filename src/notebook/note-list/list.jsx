import React from "react";
import { MdDelete } from "react-icons/md";

const List = (props) => {
  const handleClick = (id) => {
    props.openNote(id);
  };

  return (
    <div className="row m-2">
      <ul className="list-group">
        {props.showNotes.map((note, index) => (
          <li
            onClick={() => handleClick(note.id)}
            key={index}
            className="list-group-item list-group-item-action list-group-item-warning"
          >
            <h3>
              {note.title}
              <MdDelete
                name=""
                type="button"
                onClick={() => props.onDelete(index)}
              ></MdDelete>
            </h3>
            <small className="form-text text-muted">
              Category: {note.category}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
