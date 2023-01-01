import "./Menucard.css";

function Menucard() {
  return (
    <div>
      <ul className="cards">
        <li>
          <a href="#url">
            <b>Desktop App</b>
          </a>
          <em>♣</em>
          <ul>
            <li>
              <a href="#">Electron</a>
            </li>
            <li>
              <a href="#">Tauri</a>
            </li>
            <li>
              <a href="#">Neutralino JS</a>
            </li>
            <li>
              <a href="#">Flutter</a>
            </li>
            <li>
              <a href="#">Xamarin</a>
            </li>
          </ul>
          <em>♣</em>
        </li>
        <li>
          <a href="#url">
            <b>Mobile App</b>
          </a>
          <span>♦</span>
          <ul>
            <li>
              <a href="#">React Native</a>
            </li>
            <li>
              <a href="#">Flutter</a>
            </li>
            <li>
              <a href="#">Xamarin </a>
            </li>
            <li>
              <a href="#">Swiftic </a>
            </li>
          </ul>
          <span>♦</span>
        </li>
        <li>
          <a href="#url">
            <b>Back end</b>
          </a>
          <em>♠</em>
          <ul>
            <li>
              <a href="#">PHP</a>
            </li>
            <li>
              <a href="#">Node.js</a>
            </li>
            <li>
              <a href="#">Python</a>
            </li>
            <li>
              <a href="#">Storage</a>
            </li>
          </ul>
          <em>♠</em>
        </li>
        <li>
          <a href="#url">
            <b>Front end</b>
          </a>
          <span>♥</span>
          <ul>
            <li>
              <a href="#">Html & Css</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
            <li>
              <a href="#">JS Framework</a>
            </li>
            <li>
              <a href="#">JS Library</a>
            </li>
            <li>
              <a href="#">Package Manager</a>
            </li>
          </ul>
          <span>♥</span>
        </li>
        <li>
          <a href="#url">
            <b>MENU</b>
            <i>♕</i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menucard;
