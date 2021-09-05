import React, { useState } from "react";
import validator from 'validator';


const App = () => {

  const fileUrl = 'blacklistedCountries.txt';

  function ValidateCountry(value) {        
    const req = new XMLHttpRequest();    
    req.onload = function() {
        const text = req.responseText; 
        console.log(text) 
        var blacklistedCountriesArray = text.split('\n');
        for (var i = 0; i < blacklistedCountriesArray.length; i++) {
          blacklistedCountriesArray[i] = blacklistedCountriesArray[i].trim().toUpperCase();
        } 
        console.log(blacklistedCountriesArray) 
        if (blacklistedCountriesArray.indexOf(value.trim().toUpperCase()) === -1 && value !== '') {
          setCountryErrorMessage('✅');
          setButtonDisabled(false);
        } else if(blacklistedCountriesArray.indexOf(value.trim().toUpperCase()) !== -1){
          setCountryErrorMessage('❌ (Blacklisted Country)');
          setButtonDisabled(true); 
        }else {
          setCountryErrorMessage('❌');
          setButtonDisabled(true);
        }
    };    
    req.open('GET', fileUrl);
    req.send();
}

  const sessioncreditCards = [];
  const [errorMessageCardNumber, setErrorMessage] = useState('');
  const [errorMessageCountry, setCountryErrorMessage] = useState('');
  const [countrydisabled , setCountryDisabled] = useState(true);
  const [buttondisabled , setButtonDisabled] = useState(true);

  const validateCreditCard = (value) => {
    
    if (validator.isCreditCard(value)) {
      setErrorMessage('✅');
      setCountryDisabled(false);
      
    } else {
      setErrorMessage('❌');
      setCountryDisabled(true);
    }
  }

  const runValidateCountry = (value) => {
    ValidateCountry(value);
  }
  function handleSaveButton(e) {
    const creditCardNumber = document.getElementById('creditCardNumber').value
    console.log(sessioncreditCards)
    var textarea = document.getElementById("savedCards");
    e.preventDefault();
    if(sessioncreditCards.length === 0){
      sessioncreditCards.push(creditCardNumber);
      textarea.value = sessioncreditCards.join("\n");
    }else{
      if(sessioncreditCards.indexOf(creditCardNumber.trim()) === -1){
        sessioncreditCards.push(creditCardNumber);
        textarea.value = sessioncreditCards.join("\n");
      } else {
        alert('The Credit Card number ' + creditCardNumber + ' already exists, please try a different one');
      }
    }
    }
  

  return (
    <div style={{
      display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }}>
      <pre>
        <h2>Validate and Save Credit Card below</h2>

          <input type="text" placeholder="Enter Credit Card Number" onChange={(e)=> validateCreditCard(e.target.value)} id='creditCardNumber'></input>
          <span>{errorMessageCardNumber}
            <br />
          </span>
          <br />
          <input disabled={countrydisabled} placeholder="Enter Country" type="text" onChange={(e)=> runValidateCountry(e.target.value)}></input>
          <span>{errorMessageCountry}
            <br />
          </span>

        <button type='save' disabled={buttondisabled} id='saveButton' onClick={handleSaveButton} >Save Information</button>
        <br />
        <br />
        <textarea id="savedCards" disabled={true} rows="4" cols="50"></textarea>
      </pre>
    </div>
  );
}
export default App