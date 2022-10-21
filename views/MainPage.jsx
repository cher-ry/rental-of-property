const React = require('react');
const ArticlesView = require('./ArticlesView');

const Layout = require('./Layout');

function MainPage({ articles, user }) {
  return (
    <Layout user={user}>
      <script defer src="https://api-maps.yandex.ru/2.1/?apikey=a6375016-4e69-4b91-949c-0b2e86a23a35&lang=ru_RU" />
      <script defer src="/js/mapMain.js" />
      <div id="map" className="map" />
        <div id="add" />
      <div className="filter-container">
        <label htmlFor="filter" className="form-label">Отсортировать</label>
        <select name="filter" className="filter-btn">
          <option value="все" id="all">все</option>
          <option value="комната" id="room">комната</option>
          <option value="квартира" id="flat">квартира</option>
          <option value="дом" id="house">дом</option>
        </select>
      </div>
      <div className="article-container">
        <div className="card">
          <ArticlesView articles={articles} user={user} />
        </div>
      </div>
      <script defer src="js/mainPage.js" />

    </Layout>
  );
}

module.exports = MainPage;
