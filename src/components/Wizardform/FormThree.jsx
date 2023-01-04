function FormThree() {
  return (
    <div className="fieldset-content">
      Enter your information manually below
      <div>
        <div className="form-item mt-3">
          <input type="text" id="first_name" name="first_name" required />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="form-item">
          <input type="text" id="last_name" name="last_name" required />
          <label htmlFor="last_name">Last Name</label>
        </div>
        <div className="form-item">
          <input type="email" id="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-item">
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            autoComplete="off"
            required
          />
          <label htmlFor="phone_number">Phone Number</label>
        </div>
      </div>
    </div>
  );
}

export default FormThree;
