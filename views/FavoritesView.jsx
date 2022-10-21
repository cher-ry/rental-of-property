const React = require('react');

const Layout = require('./Layout');

function FavoritesView({ articles, user }) {
  return (
    <Layout user={user}>
      {articles.map((article) => (
        <section className="card-one" id={`button5${article.id}`}>
          <img src={`${article.photo}`} className="card-photo" alt="article" style={{ width: '18rem' }} />
          <div className="card-body">
            <p className="card-text">{`${article.description}`}</p>
            <p className="card-text">
              Цена:
              {' '}
              {article.price}
            </p>
          </div>
          <button
            name={`btn${article.id}`}
            type="button"
            className="btn btn-outline-primary is-deleteBtn"
          >
            Удалить из избранного
          </button>
        </section>
      ))}
      <script defer src="js/favoritePage.js" />
    </Layout>
  );
}

module.exports = FavoritesView;
