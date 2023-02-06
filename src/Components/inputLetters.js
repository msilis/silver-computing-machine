import './inputLetters.css';

function InputLetters(props){

    let letterKey = 0;
    

    return(
        <div className='letter-display-container'>
            {props.letters.map((value) => {
                return <p key={letterKey++}>{value}</p>
            })

            }
        </div>
    )
}

export default InputLetters;