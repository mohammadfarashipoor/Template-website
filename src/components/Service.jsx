import "./Service.css";
import Card from "./Card";

import bgdesign from "./image/bg1.svg";
import bgspecialcontent from "./image/bg2.svg";
import bguxresearch from "./image/bg3.svg";
import bgwebdevelopment from "./image/bg4.svg";

function Service() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto service-box">
            <div className="our-service my-5">Our Service</div>
            <div className="d-flex flex-wrap justify-content-between ">
              <Card title="Ux Research" background={bgdesign} />
              <Card title="Special Content" background={bgwebdevelopment} />
              <Card title="Web Development" background={bgspecialcontent} />
              <Card title="Design" background={bguxresearch} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
