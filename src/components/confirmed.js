import confirmedImage from '../assets/images/icon-complete.svg';
import './confirmed.css';

const Confirmed = () => {

    function refreshPage () {
        window.location.reload();
    }

    return(
        <div className="confirmed-container">
           <img src={confirmedImage} alt="confirmed checkmark" className='confirmed-image' />
           <h1 className='confirmed-header'>THANK YOU!</h1>
           <p className='subtext'>We've added your card details</p>
           <button type="button" onClick={refreshPage} className='final-confirm-btn'>Continue</button>
        </div>
    );
}

export default Confirmed;