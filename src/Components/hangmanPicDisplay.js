import "./hangmanPicDisplay.css";

//import hangman images
import firstHangman from "../Media/state2.GIF";
import secondangman from "../Media/state3.GIF";
import thirdangman from "../Media/state4.GIF";
import fourthangman from "../Media/state5.GIF";
import fifthangman from "../Media/state6.GIF";
import sixthangman from "../Media/state7.GIF";
import seventhangman from "../Media/state8.GIF";
import eigthangman from "../Media/state9.GIF";
import ninthangman from "../Media/state10.GIF";
import tenthangman from "../Media/state11.GIF";

//Array of images
let hangmanArray = [
  firstHangman,
  secondangman,
  thirdangman,
  fourthangman,
  fifthangman,
  sixthangman,
  seventhangman,
  eigthangman,
  ninthangman,
  tenthangman,
];

function HangmanPicDisplay(props) {
  let enteredLetters = props.enteredLetters;

//conditionally show hangman pic, set pic for last guess
  const imageSource = enteredLetters.length >=10 ? 9 : enteredLetters.length;

  //Check the length of enteredLetters and if it's more than 10 (meaning the complete hangman has been drawn), say the user lost.     
  if (enteredLetters.length >= 10) {
    alert("You have lost!");
  }

  return (
    <div className="pic-display">
      <img src={hangmanArray.at(imageSource)} alt="hangman" />
    </div>
  );
}

export default HangmanPicDisplay;
