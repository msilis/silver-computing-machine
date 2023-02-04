import { useState, useEffect } from "react";
import './hangmanDisplay.css';


function HangmanDisplay(){

    const [mysteryWord, setMysteryWord] = useState('')

  useEffect(()=>{
    async function getMysteryWord(){
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      console.log(response)
      const word = await response.json()
      console.log(word)
      setMysteryWord(word.toString())
     
  };
  getMysteryWord();
  }, []);

  let splitWord = mysteryWord.split('');
  console.log(splitWord)



    return(
        <div className="hangman-container">
            {splitWord.map((value)=> {
                return <div className="character-container"><p className="letter-display">{value}</p></div>
            })}
        </div>
    )
}

export default HangmanDisplay;