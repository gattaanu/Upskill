import React from "react";
import './CreditCardValidator.scss';
import validator from "validator";
const CreditCardValidator = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const validateCardValue = (cardValue) => {
    if (validator.isCreditCard(cardValue)) {
      setErrorMessage("Valid Card");
    } else {
      setErrorMessage("Invalid Card");
    }
}
    return (
      <div>
      <h3>credit card validator</h3>  
        <input
          type="text"
          onChange={(e) => validateCardValue(e.target.value)}
          placeholder="Enter Credit Card Number"
        ></input>
        <p className="error-message">{errorMessage}</p>
      </div>
    );
  ;
};
export default CreditCardValidator;
 