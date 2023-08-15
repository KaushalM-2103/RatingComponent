import react from "react"
import "./thankyou.css";
import thankYouIllustration from "../assets/illustration-thank-you.svg";

function ThankYou({rating}) {
  return (
    <div className="card thankYou_card_body rounded-5 ">
      <img
        src={thankYouIllustration}
        className="logo mt-3 mb-4"
        alt="illustration if cards"
      />
      <p className="rates rounded-5">
        You selected <span>{rating}</span> out of 5
      </p>
      <h1 className="mb-3 ">Thank you!</h1>
      <p className="thankYou_txt text-center mb-0">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
