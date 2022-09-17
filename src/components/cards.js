
import './cards.css';


// adds space after 4 characters in cc num
function format(string) {
    return string.toString().replace(/\d{4}(?=.)/g, '$& ');
}

function addSlash(string) {
    return string.toString().replace(/^.{2}/g, ' $&/');
}

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
                    <p className="name">{props.name.toUpperCase() || "JANE APPLESEED"}</p>
                    <p className="expiry">{addSlash(props.month + props.year)|| "00/00"}</p>
                </div>
            </div>
        </div>
    );
}



export default Cards;