import './App.css';
import HangmanDisplay from './Components/hangmanDisplay';
import HangmanPicDisplay from './Components/hangmanPicDisplay';
import TitleDisplay from './Components/titleDisplay';
import UserInput from './Components/userInput';



function App() {
  return (
    <div className="App">
      <TitleDisplay />
      <HangmanPicDisplay />
      <HangmanDisplay />
      <UserInput />
    </div>
  );
}

export default App;
