import "./Banner.css";
import { NavLink } from "react-router-dom";
import Bannerbg from "./image/Bannerbg";

function Banner() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row mybanner mt-5">
                <div className="col-lg-8 pt-5 pt-lg-0 order-2 oreder-lg-1 d-flex justify-content-center flex-column">
                  <span className="header-text">
                    We Are An Winning Digital Agency
                  </span>
                  <h2 className="my-3 paragraph col-md-10">
                    Lorem ipsum is a pseudo-Latin text used in web design,
                    typography, layout, and printing in place of English to
                    emphasise design elements over content
                  </h2>
                  <div className="mt-5 btn-banner col-2 btn-get-started text-center ">
                    <NavLink className="btn  text-white">Get started</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img position-absolute ">
                  <Bannerbg className="img-fluid animated mybanner-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
