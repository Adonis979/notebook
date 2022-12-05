import React, { useState } from "react";
import NoteDescription from "./note-description/noteDescription";
import NoteList from "./note-list/noteList";
import AddNoteModal from "./add-node-modal/addNoteModal";
import SearchingAndAdd from "./search-sort-filter/listing";

const Notebook = () => {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState([]);
  const [specificNote, setSepecificNote] = useState("");

  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };
  const addNote = (data) => {
    const newNote = [data, ...notes];
    setNotes(newNote);
    setShowNotes(newNote);
  };
  const openNote = (id) => {
    let array = [...notes];
    let specificNote = array.filter((obj) => {
      return obj.id === id;
    });
    setSepecificNote(specificNote);
  };
  const handleDelete = (index) => {
    let deleteNote = [...notes];
    deleteNote.splice(index, 1);
    setShowNotes(deleteNote);
    setNotes(deleteNote);
  };
  const sortList = (option) => {
    let array = [...notes];
    let sortedNotes = [];
    if (option === "All Notes") {
      setShowNotes(array);
      return;
    } else if (option === "Z-A") {
      sortedNotes = array.sort((a, b) => (a.title < b.title ? 1 : -1));
    } else if (option === "A-Z") {
      sortedNotes = array.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      sortedNotes = array.filter((obj) => {
        return obj.category === option;
      });
    }
    setShowNotes(sortedNotes);
  };
  const handleSearch = (value) => {
    let array = [...notes];
    let searchedNotes = array.filter((arr) => {
      return arr.title.includes(value);
    });
    setShowNotes(searchedNotes);
    if (value === "") {
      setNotes(array);
    }
  };
  const updateNote = (updatedNote, id) => {
    let arr = [...notes];

    let obj = arr.map((ar) => {
      if (ar.id === id) {
        return updatedNote;
      }
      return ar;
    });

    setShowNotes(obj);
    setNotes(obj);
  };

  if (specificNote.length > 0) {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-5">
            <SearchingAndAdd
              onSearch={handleSearch}
              showModal={showModal}
            ></SearchingAndAdd>
            <NoteList
              sortList={sortList}
              openNote={openNote}
              showNotes={showNotes}
              specificNote={specificNote}
              onDelete={handleDelete}
            ></NoteList>
          </div>
          <div className="col">
            <NoteDescription
              specificNote={specificNote}
              change={updateNote}
            ></NoteDescription>
          </div>
        </div>
        <div>
          <AddNoteModal
            show={modal}
            onHide={hideModal}
            addNote={addNote}
          ></AddNoteModal>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <SearchingAndAdd
          onSearch={handleSearch}
          showModal={showModal}
        ></SearchingAndAdd>
        <div className="row">
          <div className="col-5">
            <NoteList
              sortList={sortList}
              openNote={openNote}
              showNotes={showNotes}
              specificNote={specificNote}
              onDelete={handleDelete}
            ></NoteList>
          </div>
        </div>
        <div>
          <AddNoteModal
            show={modal}
            onHide={hideModal}
            addNote={addNote}
          ></AddNoteModal>
        </div>
      </React.Fragment>
    );
  }
};

export default Notebook;
