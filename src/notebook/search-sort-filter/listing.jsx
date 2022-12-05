import React from "react";

const SearchingAndAdd = (props) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col col-md-auto">
        <input
          onChange={(event) => props.onSearch(event.target.value)}
          type="search"
          className="form-control m-2"
          placeholder="Search for notes"
        />
      </div>
      <div className="col col-md-auto">
        <button className="btn btn-primary m-2" onClick={props.showModal}>
          Add Notes
        </button>
      </div>
    </div>
  );
};

export default SearchingAndAdd;
