const React = require('react');

function Footer() {
  return (
    <div className="footer-container">
      <footer id="footer" className="pt-3 mt-4 text-muted border-top">
        <div className="address">г. Санкт-Петербург, ул. Кирочная, д. 19</div>
        <div className="address">
          <a href="wolfrent@wolves.ru">Служба поддержки</a>

        </div>
        <div className="address">
          {' '}
          {`© Wolf Rent ${new Date().getFullYear()}`}

        </div>
      </footer>
    </div>
  );
}

module.exports = Footer;
