import cardfront from './bg-card-front.png'

const CardFront = props => {
    return (
        <div className="card-front-container">
            <img src={cardfront} alt="front of example card" />
            <div className="layer">
                <div className="abstract">
                    <div className="circle"></div>
                    <div className="smaller-circle"></div>
                </div>
            </div>
            <div className="number-container">
                <p className="ccnum">0000 0000 0000 0000</p>
            </div>
            <div className="lower-cardinfo">
                <p>JANE APPLESEED</p>
                <p>00/00</p>
            </div>
        </div>
    );
}

export default CardFront;