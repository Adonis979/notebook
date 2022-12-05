import Dropdown from "react-bootstrap/Dropdown";

const Buttons = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.buttonsDetails.map((buttons, index) => (
          <div className="col-md-auto" key={index}>
            <Dropdown>
              <Dropdown.Toggle variant={buttons.buttonType}>
                {buttons.buttonName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {buttons.option.map((opt, index) => (
                  <Dropdown.Item
                    onClick={() => props.sortList(opt)}
                    key={index}
                  >
                    {opt}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
