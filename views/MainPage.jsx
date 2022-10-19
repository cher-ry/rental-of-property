const React = require('react');

const Layout = require('./Layout');

function MainPage({articles, user}) {
  return (
    <Layout user={user}>
       <div className="article-container">
                <div className="card">
                    {articles.map((article) => (
                      <section className="card-one">
                        <img src={`${article.photo}`} className="card-photo" alt="article" style={{ width: "18rem" }} />
                        <div className="card-body">
                        <p className="card-text">{`${article.description}`}</p>
            <p className="card-text">Цена: {article.price}</p>
             {user && (<button onclick=" " name={`btn${article.id}`} type="button"
             className="btn btn-outline-primary">Добавить в избранное</button>)}
             {user && user.admin && (<a href='/favorite' className="favorite">Добавить в избранное</a>)}
                        </div>
                      </section>
                    ))}
                </div>
            </div>
    </Layout>
  );
}

module.exports = MainPage;
