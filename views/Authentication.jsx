const React = require('react');

const Layout = require('./Layout');

function Authentication({}) {
  return (
    <Layout>
      <main className="sign-form">
        <form id="form-authentification" method="POST" action="/auth">
          <div className="form">
            <input
              type="email"
              className="form-control"
              id="loginInputEmail"
              name="email"
              placeholder="name@example.com"
              required
              autoComplete="off"
            />
            <label htmlFor="loginInputEmail">Email address</label>
          </div>
          <div className="form">
            <label htmlFor="form-password">Пароль</label>
            <input type="password" className="form-control" id="form-password" name="password" placeholder="Введите пароль" minLength="8" required />
          </div>
          <div id="feedback" className="invalid-feedback" />
          <button type="submit" className="btn">Авторизоваться</button>
          <a href="/auth/forgot"> Забыли пароль?</a>

        </form>
      </main>
    </Layout>
  );
}
module.exports = Authentication;
