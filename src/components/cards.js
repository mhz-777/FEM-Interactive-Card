
import './cards.css';
import Form from './form';


const Cards = (props) => {
    return (
        <div className="cards-container">
            <div className="back-card-layer">
                <p className="cvv">{props.cvc || "000"}</p>
            </div>

            <div className="front-card-layer">
                <div className="abstract">
                    <div className="circle"></div>
                    <div className="smaller-circle"></div>
                </div>
                <div className="number-container">
                    <p className="ccnum">{props.number || "0000 0000 0000 0000"}</p>
                </div>
                <div className="bottom-container">
                    <p className="name">{props.name || "JANE APPLESEED"}</p>
                    <p className="expiry">{(props.month +  props.year) || "00/00"}</p>
                </div>
            </div>
        </div>
    );
}



export default Cards;