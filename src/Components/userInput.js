import "./userInput.css";

function UserInput(props) {
  //Send input to App
  function handleInputChange(event) {
    if (event.target.value === "") {
      alert("Please enter a letter");
    }
    props.setUserInput(event.target.value);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        id="user-input-box"
        autoFocus
        value={props.value || ""}
        onChange={handleInputChange}
        onKeyDown={props.onKeyDown}
      ></input>
      <div className="button-container">
      <div id="input-button" onClick={props.onSubmitClick}>
        <h4>Submit</h4>
      </div>
      <div id="reset-button" onClick={props.onResetClick}>
        <h4>Reset</h4>
      </div>
      </div>
    </div>
  );
}

export default UserInput;
