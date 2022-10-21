const React = require('react');

function Header({ user }) {
  return (
    <>
      {user ? (
        <div className="header-container">
          <ul className="navbar">
            <li className="navbar-item">
              <a className="nav-link" href="/">Main</a>
            </li>
            {user.admin ? (
              <li className="navbar-item">
                <a className="nav-link" href="/admin">Admin</a>
              </li>
            ) : (
              <li className="navbar-item">
                <a className="nav-link" href="/favorites">My favorites</a>
              </li>
            )}
            <li className="navbar-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="header-container">
          <ul className="navbar">
            <li className="navbar-item">
              <a className="nav-link" href="/auth">Login</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/registration">Register</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/">Main</a>
            </li>
          </ul>
        </div>
      )}
      <link rel="stylesheet" href="/css/headerStyle.css" />
    </>
  );
}

module.exports = Header;
