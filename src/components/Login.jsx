import "./Login.css";
import Modal from "react-bootstrap/Modal";
function Login({ show, handleClose }) {
  return (
    <div className="login-box ">
      <Modal show={show} onHide={handleClose} className="login-modal">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              <label className="label-login" htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                className="input-login"
                type="text"
                name="txt"
                placeholder="User name"
                required=""
              />
              <input
                className="input-login"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                className="input-login"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button className="btn-login">Sign up</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label className="label-login" htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input
                className="input-login"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                className="input-login"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button className="btn-login">Login</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
