import { useState } from "react";
import "./Multistepform.css";
import { EnvelopePaper } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { CursorText } from "react-bootstrap-icons";
import { Phone } from "react-bootstrap-icons";
import { ArrowDown } from "react-bootstrap-icons";
import { ArrowUp } from "react-bootstrap-icons";

function Multistepform() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Subject", icon: <CursorText />, textarea: false },
    { title: "Massage", icon: <EnvelopePaper />, textarea: true },
    { title: "Email", icon: <Envelope />, textarea: false },
    { title: "Number", icon: <Phone />, textarea: false },
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
    <div>
      <div className="content-form ">Content Us</div>
      <form className="form-step">
        <ul className="items">
          {slides.map((item, index) => (
            <li
              key={index}
              className={`${index === currentSlide ? "active-li" : "itemlist"}`}
            ></li>
          ))}
        </ul>
        <fieldset className={`${slides[currentSlide].title} enable`}>
          <div className="icon left">{slides[currentSlide].icon}</div>
          {!slides[currentSlide].textarea ? (
            <input
              className="inputtext"
              type="text"
              name={`${slides[currentSlide].title}`}
              placeholder={`${slides[currentSlide].title}`}
            />
          ) : (
            <textarea
              className="inputtext"
              name="textarea"
              rows="10"
              cols="22"
              placeholder={`${slides[currentSlide].title}`}
            ></textarea>
          )}

          <div className="icon right button" onClick={slideNext}>
            <ArrowDown />
          </div>
          <div className="icon right button" onClick={slidePrev}>
            <ArrowUp />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Multistepform;
