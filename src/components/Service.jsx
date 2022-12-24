import "./Service.css";
import Card from "./Card";

import Bgdesign from "./image/Bgdesign.jsx";
import Bgspecialcontent from "./image/Bgspecialcontent";
import Bguxresearch from "./image/Bguxresearch";
import Bgwebdevelopment from "./image/Bgwebdevelopment";

function Service() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto service-box">
            <div className="our-service my-5">Our Service</div>
            <div className="d-flex flex-wrap justify-content-between ">
              <Card title="Ux Research" background={Bgdesign} />
              <Card title="Special Content" background={Bgwebdevelopment} />
              <Card title="Web Development" background={Bgspecialcontent} />
              <Card title="Design" background={Bguxresearch} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
