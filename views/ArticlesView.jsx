const React = require('react');

function ArticlesView({ articles, user }) {
  return (
    <>
      {articles.map((article) => (
        <section className="card-one" key={article.id}>
          <img src={`${article.photo.replace('/home/user/Sophia/Phase 2/rental-of-property/public', '')}`} className="card-photo" alt="article" style={{ width: '18rem' }} />
          <div className="card-body">
            <p className="card-text">{`${article.description}`}</p>
            <p className="card-text">
              Цена:
              {' '}
              {article.price}
            </p>
            {user && (
            <button
              onClick={() => { console.log(article, user); }}
              name={`btn${article.id}`}
              type="button"
              className="btn btn-outline-primary is-favoriteBtn"
            >
              Добавить в избранное
            </button>
            )}
          </div>
        </section>

      ))}
    </>
  );
}

module.exports = ArticlesView;
