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
  const [userInput, setUserInput] = useState("");
  const [, setUserReset] = useState(false);
  const [mysteryWord, setMysteryWord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef();

  //Split up word into array and pass as props to display component
  let splitWord = mysteryWord.split("");

  //Check for winner
  function checkWinner() {
    console.log("Checking winner");
    let guessedLetterArraySet = [...new Set(guessedLetterArray)];
    let splitWordSet = [...new Set(splitWord)];
    console.log(guessedLetterArraySet);
    console.log(splitWordSet);
    if (isEqual(guessedLetterArraySet, splitWordSet)) {
      alert("You figured it out!");
    }
  }
  //Submit button functionality
  function handleButtonClick() {
    if (splitWord.includes(userInput)) {
      if (guessedLetterArray.includes(userInput)) {
        alert("You have already guessed that letter");
      } else {
        console.log("The letter you guessed is in the word");
        guessedLetterArray.push(userInput);
        console.log(guessedLetterArray);
        checkWinner();
      }
    } else if (enteredLetters.includes(userInput)) {
      alert("You have already guessed that letter");
    } else {
      console.log("The letter was not in the word");
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
      if (splitWord.includes(userInput)) {
        if (guessedLetterArray.includes(userInput)) {
          alert("You have already guessed that letter");
        } else {
          console.log("The letter you guessed is in the word");
          guessedLetterArray.push(userInput);
        }
      } else if (enteredLetters.includes(userInput)) {
        alert("You have already guessed that letter");
      } else {
        console.log("The letter was not in the word");
        enteredLetters.push(userInput);
      }
      //Reset inputs and state
      setUserInput("");
      setUserReset(false);
      checkWinner();
      inputRef.current?.focus();
    }
  }

  //Reset button functionality

  function clearArray(array) {
    console.log("clearArray");
    while (array.length > 0) {
      array.pop();
    }
  }

  function handleResetClick() {
    clearArray(enteredLetters);
    clearArray(guessedLetterArray);
    setUserInput("");
    setUserReset(true);
    console.log("reset clicked");
    console.log(enteredLetters);
    inputRef.current?.focus();
  }

  //Help button functionality

  function handleHelpClick() {
    setShowModal(true);
  }

  //Modal hide button functionality

  function handleHideClick() {
    setShowModal(false);
  }

  //Get random word from API

  //Fetch random word when page loads for the first time
  useEffect(() => {
    async function getMysteryWord() {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word"
      );
      const word = await response.json();
      console.log(word);
      setMysteryWord(word.toString());
    }
    getMysteryWord();
  }, []);

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
