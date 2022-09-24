import './form.css';
import Cards from './cards';
import Confirmed from './confirmed';
import {useState} from "react";
import {useForm} from "react-hook-form";

const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [submitted, setStatus] = useState();
    const [data, setData] = useState ({
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: ""
    });

    const formSubmit = (event) => {
        setStatus(true);
    }

    
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
                <form onSubmit={handleSubmit(formSubmit)} autoComplete='off'>
                    <div className="column-container">
                        <label htmlFor="cardholdername" className='holder-name'>
                        CARDHOLDER NAME
                            <input 
                                    {...register("name", {
                                        required: "Can't be blank",
                                        minLength: {
                                            value: 2,
                                            message: "No."
                                        },
                                        pattern: {
                                            value:/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                            message: 'Wrong format, letters only'
                                        }
                                    })}
                                    onChange={handleChange}
                                    placeholder="e.g. Jane Appleseed" 
                                    maxLength={30}
                                />
                                <p className="error-message">{errors.name?.message}</p>
                        </label>
                        <label htmlFor="cardnumber" className='card-number'>
                        CARD NUMBER               
                            <input
                                    {...register("number", {
                                        required: "Can't be blank",
                                        maxLength: {
                                            value: 19,
                                            message: 'Please match format'
                                        },
                                        pattern: {
                                            value:/^([0-9]+( [0-9]+)+)/,
                                            message: 'Wrong format, numbers only'
                                        }
                                    })}
                                    onChange={handleChange}
                                    placeholder='e.g. 1234 5678 9123 0000' 
                                    maxLength={19}
                            />
                            <p className="error-message">{errors.number?.message}</p>
                        </label>
                    </div>
                    <div className="row-container">
                        <label htmlFor="expdate" className='expiry-date'>
                        EXP. DATE (MM/YY)
                        <div className="input-container">
                            <input
                                    {...register("month", {
                                        required: "Can't be blank",
                                        maxLength: {
                                            value: 2,
                                            message: 'Please match format'
                                        },
                                        pattern: {
                                            value: /^(0?[1-9]|1[012])$/,
                                            message: 'Wrong format, numbers only'
                                        }
                                    })}
                                    onChange={handleChange}
                                    placeholder='MM'
                                    type='text'
                                    maxLength={2}
                                    
                            />
                            <input
                                    {...register("year", {
                                        required: "Can't be blank",
                                        maxLength: {
                                            value: 2,
                                            message: 'Please match format'
                                        },
                                        pattern: {
                                            value: /[0-9]+/,
                                            message: "Wrong format, numbers only"
                                        }
                                    })}
                                    onChange={handleChange}
                                    placeholder='YY'
                                    maxLength={2}
                             />
                        </div> 
                        <p className="error-message">{errors.month?.message || errors.year?.message}</p>      
                        </label>
                        <label htmlFor="cvc" className='cvc'>
                            CVC
                            <input
                                {...register("cvc", {
                                    required: "Can't be blank",
                                    maxLength: {
                                        value: 3,
                                        message: "Max 3 numbers"
                                    },
                                    pattern: {
                                        value: /[0-9]+/,
                                        message: "Wrong format, numbers only"
                                    }
                                })}
                                onChange={handleChange}
                                placeholder='e.g 123'
                                maxLength={3}
                                
                             />
                        <p className="error-message">{errors.cvc?.message}</p>
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

