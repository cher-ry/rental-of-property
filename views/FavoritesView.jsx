const React = require('react');

const Layout = require('./Layout');

function FavoritesView({ favorites, user }) {
  return (
    <Layout user={user}>
      {favorites.map((favorite) => (
        <section className="card-one">
          <img src={`${favorite.photo}`} className="card-photo" alt="article" style={{ width: '18rem' }} />
          <div className="card-body">
            <p className="card-text">{`${favorite.description}`}</p>
            <p className="card-text">
              Цена:
              {' '}
              {favorite.price}
            </p>
          </div>
        </section>
      ))}
    </Layout>
  );
}

module.exports = FavoritesView;
