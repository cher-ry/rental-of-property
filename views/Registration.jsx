const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <form className="regoForm" method="POST" action="/registration">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin" className="form-label">Login</label>
          <input type="text" name="login" className="form-control" id="exampleInputLogin" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Password Confirmation</label>
          <input type="password" name="passwordconf" className="form-control" id="exampleInputPassword" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputRole" className="form-label">Admin</label>
          <select name="role" className="select" id="exampleInputRole">
            <option>true</option>
            <option>false</option>
          </select>
        </div>
        <div id="confirm" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <script defer src="js/registration.js" />
    </Layout>
  );
}
module.exports = Registration;
