import './form.css';
import Cards from './cards';
import {useState} from "react";

const Form = () => {

    const [data, setData] = useState ({
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: ""
    });

    function handleChange(event) {
        setData({...data, [event.target.name]: event.target.value});
    };


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
                <form action="" className="dataform">
                    <div className="column-container">
                            <label htmlFor="cardholdername" className="holder-name">
                                CARDHOLDER NAME
                                <input 
                                type="text" 
                                name="name"
                                placeholder="e.g. Jane Appleseed" 
                                pattern="[a-zA-Z]+"
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
                                pattern= "[0-9]+" 
                                onChange={handleChange}
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
                                    pattern="[0-12]+" 
                                    onChange={handleChange}
                                    required
                                    />
                                    <input
                                    type="text" 
                                    name="year"
                                    placeholder="YY"
                                    pattern="[23-99]+" 
                                    onChange={handleChange}
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
                                pattern="[001-999]+"
                                onChange={handleChange}
                                
                                required
                                />
                            </label>
                    </div>
                    <div className="button-container">
                        <input 
                        type="button" 
                        value="Confirm" 
                        className="submit-btn"
                        />
                    </div>
                </form>
            </div>
        </div>
        
    );
}

export default Form;

