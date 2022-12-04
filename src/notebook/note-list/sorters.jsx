import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Sorter = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.sortersDetails.map((sorter, index) => (
          <div className="col-md-auto" key={index}>
            <Dropdown>
              <Dropdown.Toggle variant={sorter.buttonType}>
                {sorter.buttonName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>{sorter.option}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sorter;
