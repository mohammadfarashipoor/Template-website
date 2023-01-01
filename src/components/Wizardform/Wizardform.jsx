import { useState } from "react";
import "./Wizardform.css";
import FormOne from "./FormOne";
import FormTow from "./FormTow";
import FormThree from "./FormThree";
const infobg = require("./image/infobg.png");
const reviewbg = require("./image/reviewbg.png");
const aboutbg = require("./image/aboutbg.png");

function Multistepform() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "about", component: <FormOne />, bg: aboutbg },
    { title: "reveiw", component: <FormTow />, bg: reviewbg },
    { title: "info", component: <FormThree />, bg: infobg },
  ];
  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  return (
    <div className="container mt-5">
      <div className="content-form ">Content Us</div>
      <form
        method="POST"
        className="form-step flex-md-row"
        encType="multipart/form-data"
      >
        <ul className="d-flex flex-row flex-sm-column items">
          {slides.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
              className={`${index === currentSlide ? "active-li" : "itemlist"}`}
            ></li>
          ))}
        </ul>
        <fieldset className={`${slides[currentSlide].title} enable`}>
          <span className="step-current d-sm-block d-none">
            <span className="step-current-content">
              <span className="step-number">
                <span>{currentSlide + 1}</span>/{slides.length}
              </span>
            </span>
          </span>
          <div>
            <div className="d-flex justify-content-evenly align-items-center flex-column flex-md-row flex-lg-row">
              <figure className="d-content">
                <img
                  className="Contentbg"
                  src={slides[currentSlide].bg}
                  alt="infobg"
                />
              </figure>
              {slides[currentSlide].component}
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row-reverse">
            {currentSlide !== slides.length - 1 ? (
              <div className="btn-Content right button" onClick={slideNext}>
                Next
              </div>
            ) : (
              <div className="btn-Content  right button">Submit</div>
            )}

            {currentSlide !== 0 ? (
              <div
                className="btn-Content btn-Content-bg  right button"
                onClick={slidePrev}
              >
                Prev
              </div>
            ) : null}
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Multistepform;
