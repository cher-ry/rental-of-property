const React = require('react');

const Header = require('./Header');
const Footer = require('./Footer');

function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/map.css" />
        <script defer src="https://api-maps.yandex.ru/2.1/?apikey=a6375016-4e69-4b91-949c-0b2e86a23a35&lang=ru_RU" />
        <script defer src="/js/map.js"></script>
        <title>Wolves Rent</title>
      </head>
      <body>
        <Header user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
module.exports = Layout;
