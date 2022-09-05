
import './card-front.css'

const CardFront = props => {
    return (
        <div className="card-front-container">
            
            <div className="front-card-layer">
                <div className="abstract">
                    <div className="circle"></div>
                    <div className="smaller-circle"></div>
                </div>
                <div className="number-container">
                    <p className="ccnum">0000 0000 0000 0000</p>
                </div>
                <div className="bottom-container">
                    <p className="name">JANE APPLESEED</p>
                    <p className="expiry">00/00</p>
                </div>
            </div>
        </div>
    );
}

export default CardFront;