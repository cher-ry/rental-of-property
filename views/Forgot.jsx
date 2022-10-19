const React = require('react');

// компоненты
const Layout = require('./Layout');


function Forgot({ title }) {
  return (
    <Layout title={title}>
        <main className="form-forgot">
          <form id="formForgot" method="POST" action="/auth/forgot">
            <h1 className="h3 mb-3 fw-normal">Заполните поля, чтобы сбросить пароль</h1>
              <label htmlFor="loginInputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="loginInputEmail"
                name="email"
                placeholder="Email"
                required
                autoComplete="off"
              />
            <div id="feedback" className="invalid-feedback" />
            <button type="submit" className="forgot-button">Reset password</button>
            <a href="/" className='btn'>Back home</a>
          </form>
        </main>
    </Layout>
  );
}


module.exports = Forgot;
