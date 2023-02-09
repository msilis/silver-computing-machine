import './inputLetters.css';

function InputLetters(props){

    //unique key for mapped <p> elements 
    let letterKey = 0;


    return(
        <div className='letter-display-container'>
            {/* Map letters from passed-in array */}
            {props.letters.map((value) => {
                return <p key={letterKey++}>{value}</p>
            })

            }
        </div>
    )
}

export default InputLetters;