function Formone() {
  return (
    <div className="fieldset-content">
      How Did You Hear About Us?
      <div className="items-about">
        <div className="containerOuter">
          <div className="container-radio">
            <input type="radio" className="hidden" id="input1" name="inputs" />
            <label className="entry" htmlFor="input1">
              <div className="circle"></div>
              <div className="entry-label">Instagram</div>
            </label>
            <input type="radio" className="hidden" id="input2" name="inputs" />
            <label className="entry" htmlFor="input2">
              <div className="circle"></div>
              <div className="entry-label">Linkdin</div>
            </label>
            <input type="radio" className="hidden" id="input3" name="inputs" />
            <label className="entry" htmlFor="input3">
              <div className="circle"></div>
              <div className="entry-label">Friends</div>
            </label>
            <input type="radio" className="hidden" id="input3" name="inputs" />

            <div className="highlight"></div>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formone;
