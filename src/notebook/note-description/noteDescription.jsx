import { MdModeEditOutline } from "react-icons/md";

const NoteDescription = (props) => {
  if (props.descripton) return null;
  return (
    <div>
      <h2 className="m-2">Note Description:</h2>
      <div>
        {props.specificNote.map((note, index) => (
          <div key={index} className="card card-body m-2 bg-light">
            <span className="side-stick"></span>
            <h3
              value={note.title}
              className="note-title text-truncate w-75 mb-0"
            >
              {note.title}
            </h3>
            <p className="note-date font-12 text-muted">{note.dateCreated}</p>
            <div className="note-content">
              <p className="note-inner-content h5 text-bold">
                {note.description}
              </p>
            </div>
            <div>
              <MdModeEditOutline
                type="button"
                onClick={props.showModal}
              ></MdModeEditOutline>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteDescription;
