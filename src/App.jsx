import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({initialInvestment : 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10});

  const isInputValid = userInput.duration > 0
    function handleOnChange(inputIdentifier, newValue){
        setUserInput((prevInput) => {
            return {...prevInput, [inputIdentifier]: +newValue,
            };
        });
    }
  return (
    <>
    <Header />
    <UserInput userInput = {userInput} onChange = {handleOnChange} />
    {!isInputValid && <p className="center">Please enter a valid input!</p>}
    {isInputValid && <Results input={userInput} />}
    </>
    
  )
}

export default App
