import Sorter from "./sorters";
import { MdDelete } from "react-icons/md";

const NoteList = (props) => {
  const handleClick = (title) => {
    props.openNote(title);
    props.showDescription();
  };

  const sortersDetails = [
    {
      buttonName: "Title Sort",
      buttonType: "primary",
      option: ["A-Z", "Z-A"],
    },
    {
      buttonName: "Category Sort",
      buttonType: "secondary",
      option: ["Reminders", "Work", "Quotes", "Shopping List"],
    },
    {
      buttonName: "Date Sort",
      buttonType: "success",
      option1: "From newest",
      option2: "From oldest",
    },
  ];

  return (
    <div>
      <h2 className="m-2">Note List:</h2>
      <Sorter sortersDetails={sortersDetails}></Sorter>
      <div className="row m-2">
        <ul className="list-group">
          {props.notes.map((note, index) => (
            <li
              onClick={() => handleClick(note.title)}
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
    </div>
  );
};

export default NoteList;
