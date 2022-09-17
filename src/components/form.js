import './form.css';
import Cards from './cards';
import Confirmed from './confirmed';
import {useState} from "react";

const Form = () => {

    const [data, setData] = useState ({
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: ""
    });

    const [submitted, setStatus] = useState();

    function handleChange(event) {
        setData({...data, [event.target.name]: event.target.value});
    };

    function handleSubmit(event) {
        event.preventDefault();
        setStatus(true);
        
    }

   
   


    return (
        <div className="main-container">
            <div className="child-container">
                <Cards 
                    name={data.name} 
                    number={data.number}
                    month={data.month}
                    year={data.year}
                    cvc={data.cvc}
                    
                />
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="dataform" autoComplete='off'>
                    <div className="column-container">
                            <label htmlFor="cardholdername" className="holder-name">
                                CARDHOLDER NAME
                                <input 
                                type="text" 
                                name="name"
                                placeholder="e.g. Jane Appleseed" 
                                pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
                                onChange={handleChange}
                                required
                                />
                            </label>
                            <label htmlFor="cardnumber" className="card-number">
                                CARD NUMBER
                                <input
                                type="text" 
                                name="number"
                                placeholder='e.g. 1234 5678 9123 0000' 
                                pattern='^[0-9]+'
                                onChange={handleChange}
                                maxLength={16}
                                required
                                />
                            </label>
                    </div>
                    <div className="row-container">
                            <label htmlFor="expdate" className="expiry-date">
                                EXP. DATE (MM/YY)
                                <div className="input-container">
                                    <input
                                    type="text"
                                    name="month"
                                    placeholder="MM" 
                                    pattern='^(0?[1-9]|1[012])$'
                                    onChange={handleChange}
                                    maxLength={2}
                                    required
                                    />
                                    <input
                                    type="text" 
                                    name="year"
                                    placeholder="YY"
                                    
                                    onChange={handleChange}
                                    maxLength={2}
                                    required
                                    />
                                </div>
                            </label>
                            <label htmlFor="cvc" className="cvc">
                                CVC
                                <input
                                type="text" 
                                name="cvc"
                                placeholder="e.g 123" 
                                
                                onChange={handleChange}
                                maxLength={3}
                                required
                                />
                            </label>
                    </div>
                    <div className="button-container">
                        <button className="submit-btn">Confirm</button>
                    </div>
                    {submitted === true && <Confirmed />}
                </form>
                
            </div>
        </div>
        
    );
}

export default Form;

