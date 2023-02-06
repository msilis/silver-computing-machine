import './infoModal.css';

function InfoModal(props){
    const modalClassName = props.modalState ? 'modal display-block' : 'modal display-none'

    return(
        <div className={modalClassName}>
            <div className='modal-container'>
                <div className='help-items'>
                <h3>Help!</h3>
                <p>Guess letters to figure out mystery word.</p>
                <p>If you guess correctly, letter will appear in word. If you don't, drawing will appear.</p>
                <h4>Get new word?</h4>
                <p>Refresh page</p>
                <h4>Try again with current word?</h4>
                <p>Hit that reset button.</p>
                </div>
                <div className='modal-button-container'>
                    <div id='modal-close-button' onClick={props.onHideClick}>
                        <h4 id="close-text">Close</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoModal;