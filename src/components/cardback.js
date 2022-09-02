// import image
import cardback from './bg-card-back.png'

const CardBack = props => {
    return (
        <div className="card-back-container">
            <img src={cardback} alt="backside of example card" />
            <div className="layer">
                <p className="cvv">000</p>
            </div>
        </div>
    );
}

export default CardBack;

