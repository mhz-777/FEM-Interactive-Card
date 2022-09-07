import './form.css'

const Form = props => {
    return (
        <div className="form-container">
            <form action="" className="dataform">
                <div className="column-container">
                        <label htmlFor="cardholdername" className="holder-name">
                            CARDHOLDER NAME
                            <input type="text" placeholder="e.g. Jane Appleseed" required/>
                        </label>
                        <label htmlFor="cardnumber" className="card-number">
                            CARD NUMBER
                            <input type="text" placeholder='e.g. 1234 5678 9123 0000' required />
                        </label>
                </div>
                <div className="row-container">
                        <label htmlFor="expdate" className="expiry-date">
                            EXP. DATE (MM/YY)
                            <div className="input-container">
                                <input type="text" placeholder="MM" required/>
                                <input type="text" placeholder="YY" required/>
                            </div>
                        </label>
                        <label htmlFor="cvc" className="cvc">
                            CVC
                            <input type="text" placeholder="e.g 123" required />
                        </label>
                </div>
                <div className="button-container">
                    <input type="button" value="Confirm" className="submit-btn"/>
                </div>
            </form>
        </div>
    );
}

export default Form;