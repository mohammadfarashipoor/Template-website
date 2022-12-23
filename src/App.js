import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Rotatetext from "./components/Rotatetext";
import Service from "./components/Service";
import Multistepform from "./components/Multistepform";
import Menucard from "./components/Menucard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rotatetext />
      <Menucard />
      <Service />
      <Multistepform />
    </div>
  );
}

export default App;
