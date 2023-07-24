
import './index.css';
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(arr)

  // const step = 1;

  function handlePrevious() {
    // alert('previous')
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
    // alert('next')
  }

  function handleClopen () {
    setIsOpen(!isOpen)
  }
  // function handleOpen () {
  //   setIsOpen(true)
  // }

  return (
    <div>
      {/* if isOpen is true, render component, else "" */}
      {isOpen ? (
        <div>
          <button 
            className='close'
            onClick={handleClopen}
          > &times; </button>
          <div className='steps'>
            <div className='numbers'>
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className='message'>
              {" "}
              Step {step}: {messages[step - 1]}{" "}
            </p>
            <div className='buttons'>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                {" "}
                Next{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>The page you are looking for is not here :( </h1>
          <button 
            className='close'
            onClick={handleClopen}
          > &#10003; </button>
        </div>
      )}
    </div>
  );
}

export default App;