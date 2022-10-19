const React = require('react');

const Layout = require('./Layout');

function Authentication({}) {
  return (
    <Layout>
      <main className="sign-form">
        <form className="form-authentification" method="POST" action="/auth">
          
          <div className="form">
            <label htmlFor="form-email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="form-email"
              name="email"
              placeholder="name@example.com"
              required
              autoComplete="off"
            />
          </div>
          <div className="form">
            <label htmlFor="form-password">Пароль</label>
            <input type="password" className="form-control" id="form-password" name="password" placeholder="Введите пароль" minLength="8" required />
          </div>
          
          <button type="submit" className="btn">Авторизоваться</button>
          <a href="/auth/forgot"> Забыли пароль?</a>
        </form>
        <div id="feedback" className="invalid-feedback">gyhjtfyjtyjtyj</div>
      </main>
      <script defer src="js/authentication.js" />
    </Layout>
  );
}
module.exports = Authentication;
