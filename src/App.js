import { useEffect, useState } from 'react';
import './App.css';
import HangmanDisplay from './Components/hangmanDisplay';
import TitleDisplay from './Components/titleDisplay';
import UserInput from './Components/userInput';



function App() {
 
  const [mysteryWord, setMysteryWord] = useState('')

  useEffect(()=>{
    async function getMysteryWord(){
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      console.log(response)
      const word = await response.json()
      console.log(word)
      setMysteryWord(word)
     
  };
  getMysteryWord();
  }, []);

  console.log(mysteryWord)
   
 
 



  return (
    <div className="App">
      <TitleDisplay />
      <HangmanDisplay />
      <UserInput />
    </div>
  );
}

export default App;
