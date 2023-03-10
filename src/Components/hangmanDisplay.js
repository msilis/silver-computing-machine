import "./hangmanDisplay.css";

function HangmanDisplay(props) {
  //get props from App component
  let randomWord = props.splitWord;
  let guessedLetterArray = props.guessedLetters;
  let dataDivId = 0;
  let dataPId = 0;

  return (
    <div className="hangman-container">
      {/* Map each letter in the array to it's own div for display */}
      {randomWord.map((value) => {
        return (
          <div key={dataDivId++} className="character-container">
            <p
              key={dataPId++}
              /* Toggle class name depending on entered letter match */
              className={
                guessedLetterArray.includes(value)
                  ? "letter-display-visible"
                  : "letter-display-hidden"
              }
            >
              {value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default HangmanDisplay;
