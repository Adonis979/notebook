import React, { useState } from "react";
import NoteDescription from "./note-description/noteDescription";
import NoteList from "./note-list/noteList";
import AddNoteModal from "./add-node-modal/addNoteModal";
import Listing from "./search-sort-filter/listing";

const Notebook = () => {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const [specificNote, setSepecificNote] = useState([]);
  const [description, setDescription] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };
  const saveNote = (data) => {
    const newNote = [data, ...notes];
    setNotes(newNote);
    console.log(...notes);
  };
  const openNote = (data) => {
    let specificNote = [...notes];
    specificNote = specificNote.filter((obj) => {
      return obj.title === data;
    });
    setSepecificNote(specificNote);
    console.log(specificNote);
  };
  const showDescription = () => {
    console.log("jam ketu");
    setDescription(false);
  };
  const handleDelete = (index) => {
    let deleteNote = [...notes];
    deleteNote.splice(index, 1);
    setNotes(deleteNote);
  };

  return (
    <React.Fragment>
      <Listing showModal={showModal}></Listing>
      <div className="row">
        <div className="col-5">
          <NoteList
            showModal={showModal}
            openNote={openNote}
            notes={notes}
            showDescription={showDescription}
            specificNote={specificNote}
            onDelete={handleDelete}
          ></NoteList>
        </div>
        <div className="col">
          <NoteDescription
            showModal={showModal}
            description={description}
            specificNote={specificNote}
          ></NoteDescription>
        </div>
      </div>
      <div>
        <AddNoteModal
          show={modal}
          onHide={hideModal}
          saveNote={saveNote}
        ></AddNoteModal>
      </div>
    </React.Fragment>
  );
};

export default Notebook;
