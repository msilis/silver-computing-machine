import "./userInput.css";

function UserInput(props) {
  //Send input to App
  function handleInputChange(event) {
    //if user doesn't enter anything, prompt the following:
    if (event.target.value === "") {
      alert("Please enter a letter");
    }
    //send the input up to the app component
    props.setUserInput(event.target.value);
  }

  return (
    <div className="input-container">
      {/* Grab user letter input */}
      <input
        type="text"
        id="user-input-box"
        autoFocus
        value={props.value || ""}
        onChange={handleInputChange}
        onKeyDown={props.onKeyDown}
        disabled={props.inputState}
      ></input>
      <div className="button-container">
        <div id="input-button" onClick={props.onSubmitClick}>
          <h4>Submit</h4>
        </div>
        <div id="reset-button" onClick={props.onResetClick}>
          <h4>Reset</h4>
        </div>
        <div id="help-button" onClick={props.onHelpClick}>
          <h4>Help</h4>
        </div>
      </div>
    </div>
  );
}

export default UserInput;
