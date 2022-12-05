import Buttons from "./buttons";
import List from "./list";

const NoteList = (props) => {
  const buttonsDetails = [
    {
      buttonName: "Title Sort",
      buttonType: "primary",
      option: ["A-Z", "Z-A"],
    },
    {
      buttonName: "Category Filter",
      buttonType: "secondary",
      option: ["All Notes", "Reminders", "Work", "Quotes", "Shopping List"],
    },
  ];
  return (
    <div className="m-2">
      <Buttons
        sortList={props.sortList}
        buttonsDetails={buttonsDetails}
      ></Buttons>
      <h3 className="m-2">All Notes:</h3>
      <List
        openNote={props.openNote}
        showNotes={props.showNotes}
        onDelete={props.onDelete}
      ></List>
    </div>
  );
};

export default NoteList;
