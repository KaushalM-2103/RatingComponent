import { useState } from "react";
import starIcon from "../assets/icon-star.svg";
import "./rating.css";
import ThankYou from "./thankyou";

function Rating() {
  const [rates, setRates] = useState(0);
  const [thankYouVisbile, setThankYouVisible] = useState(false);

  const handlerating = (value) => {
    setRates(value);
  };

  const handleSubmit = () => {
    setThankYouVisible(true);
    setTimeout(()=>{
      window.location.reload()
    },30000)
  };

  return (
    <div>
      {thankYouVisbile ? (
        
        <ThankYou rating={rates} />
      ) : (
        <div className="card card_body rounded-5 ">
          <div className="StarIconBody rounded-circle mb-4">
            <img src={starIcon} className="starIcn" alt="Vite logo" />
          </div>
          <h1 className="mb-3">How did we do?</h1>
          <p className="mb-4 feedbackTxt">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className=" ps-0 mb-4 d-flex w-100 justify-content-between">
            {[1, 2, 3, 4, 5].map((value) => (
              <li
                key={value}
                className={`rounded-circle text-center ms-0`}
                onClick={() => {
                  handlerating(value);
                }}
                style={{
                  backgroundColor: rates == value ? "hsl(25, 97%, 53%)" : "",
                  color: rates == value ? "white" : "",
                }}
              >
                {value}
              </li>
            ))}
          </ul>
          <button className="rounded-5" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      ;
    </div>
  );
}

export default Rating;
