import { isEqual } from "lodash";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import HangmanDisplay from "./Components/hangmanDisplay";
import HangmanPicDisplay from "./Components/hangmanPicDisplay";
import InputLetters from "./Components/inputLetters";
import InfoModal from "./Components/Modal/infoModal";
import TitleDisplay from "./Components/titleDisplay";
import UserInput from "./Components/userInput";

//Arrays to hold guessed letters
let enteredLetters = [];
let guessedLetterArray = [];

function App() {
  //State
  //guessed letter satate
  const [userInput, setUserInput] = useState("");
  //state to make reset button functional
  const [, setUserReset] = useState(false);
  //random word
  const [mysteryWord, setMysteryWord] = useState("");
  //state for help screen
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef();

  //Get random word from API

  //Fetch random word when page loads for the first time
  useEffect(() => {
    async function getMysteryWord() {
      //get word from API
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word"
      );
      //assign response word to variable
      const word = await response.json();
      console.log(word);
      setMysteryWord(word.toString());
    }
    getMysteryWord();
  }, []);

  //Split up word into array and pass as props to display component
  let splitWord = mysteryWord.split("");
  console.log(splitWord)

  //Check for winner
  function checkWinner() {
    console.log("Checking winner");
    //arrange both guessed letters and word into array to check equality
    let guessedLetterArraySet = [...new Set(guessedLetterArray)];
    let splitWordSet = [...new Set(splitWord)];
    console.log(splitWordSet);
    //If the arrays match, declare winner
    if (isEqual(guessedLetterArraySet, splitWordSet)) {
      alert("You figured it out!");
    }
  }
  //Submit button functionality
  function handleButtonClick() {
    if (splitWord.includes(userInput)) {
      //Check if a letter has already been guessed and is in the guessed letters array
      if (guessedLetterArray.includes(userInput)) {
        alert("You have already guessed that letter");
      } else {
        console.log("The letter you guessed is in the word");
        //If letter hasn't been guessed, push to guessed letter array
        guessedLetterArray.push(userInput);
        console.log(guessedLetterArray);
        checkWinner();
      }
    } else if (enteredLetters.includes(userInput)) {
      //Check if letter has been already guessed and is in the enteredLetters array
      alert("You have already guessed that letter");
    } else {
      console.log("The letter was not in the word");
      //If the letter is not in the array and also isn't in the word, push to enteredLetters array
      enteredLetters.push(userInput);
      console.log(enteredLetters);
    }
    //Reset inputs and state
    setUserInput("");
    setUserReset(false);
    checkWinner();
    inputRef.current?.focus();
  }

  //Enter key functionality
  function handleKeyEnter(event) {
    if (event.key === "Enter") {
      //check if user input has already been guessed
      if (splitWord.includes(userInput)) {
        if (guessedLetterArray.includes(userInput)) {
          alert("You have already guessed that letter");
        } else {
          //If it hasn't been guessed and is in the word, push to guessedLetters array
          console.log("The letter you guessed is in the word");
          guessedLetterArray.push(userInput);
        }
        //Check if user input is already in the enteredLetters array
      } else if (enteredLetters.includes(userInput)) {
        alert("You have already guessed that letter");
      } else {
        //If user input is not in enteredLetters array and not in the word, push letter to enteredLetters array
        console.log("The letter was not in the word");
        enteredLetters.push(userInput);
      }
      //Reset inputs and state
      setUserInput("");
      setUserReset(false);
      //Check if there was a winner
      checkWinner();
      //refocus cursor on input after submit
      inputRef.current?.focus();
    }
  }

  //Reset button functionality
  //Function to clear arrays when reset button is pressed

  function clearArray(array) {
    console.log("clearArray");
    while (array.length > 0) {
      array.pop();
    }
  }

  function handleResetClick() {
    //clear both arrays
    clearArray(enteredLetters);
    clearArray(guessedLetterArray);
    //reset userInput state
    setUserInput("");
    //set reset state
    setUserReset(true);
    console.log("reset clicked");
    console.log(enteredLetters);
    //refocus cursor on userinput after reset
    inputRef.current?.focus();
  }

  //Help button functionality

  function handleHelpClick() {
    //set state to how modal
    setShowModal(true);
  }

  //Modal hide button functionality

  function handleHideClick() {
    //set state to hide modal
    setShowModal(false);
  }

  return (
    <div className="App">
      <TitleDisplay />
      <HangmanPicDisplay enteredLetters={enteredLetters} />
      <HangmanDisplay
        splitWord={splitWord}
        guessedLetters={guessedLetterArray}
      />
      <UserInput
        onSubmitClick={handleButtonClick}
        onResetClick={handleResetClick}
        onKeyDown={handleKeyEnter}
        setUserInput={setUserInput}
        setUserReset={setUserReset}
        onHelpClick={handleHelpClick}
        value={userInput}
      />
      <InputLetters letters={enteredLetters} />
      <InfoModal onHideClick={handleHideClick} modalState={showModal} />
    </div>
  );
}

export default App;
