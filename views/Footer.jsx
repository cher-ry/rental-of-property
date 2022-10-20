const React = require('react');

function Footer() {
  return (
    <footer id="footer" className="pt-3 mt-4 text-muted border-top">
      <div>г. Санкт-Петербург, ул. Кирочная, д. 19</div>
      <div><a href='wolfrent@wolves.ru'>Служба поддержки</a></div>
      {`© Wolf Rent ${new Date().getFullYear()}`}
    </footer>
  );
}

module.exports = Footer;