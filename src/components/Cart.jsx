import "./Cart.css";
import { Cart2 } from "react-bootstrap-icons";
const imgreact = require("./image/ReactDesignPatterns.jpg");
const imguiux = require("./image/UiandUx.jpg");

function Cart() {
  return (
    <div className="cart-nav">
      <div className="container">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <Cart2 />
            <span className="badge">3</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">$109.98</span>
            </div>
          </div>

          <ul className="shopping-cart-items">
            <li className="clearfix">
              <img src={imgreact} alt="item1" className="cart-img" />
              <span className="item-name">React Design Patterns</span>
              <span className="item-price">$84.99</span>
            </li>

            <li className="clearfix">
              <img src={imguiux} alt="item1" className="cart-img" />
              <span className="item-name">
                Graphic design, UX, and UI design
              </span>
              <span className="item-price">$24.99</span>
            </li>
          </ul>

          <button className="button-cart">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
