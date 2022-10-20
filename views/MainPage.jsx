const React = require('react');

const Layout = require('./Layout');


function MainPage({articles, user, categories}) {

  return (
    <Layout user={user}>
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
                    {articles.map((article) => (
                      <section className="card-one">
                        <img src={`${article.photo.replace('/home/user/Sophia/Phase 2/rental-of-property/public','')}`} className="card-photo" alt="article" style={{ width: "18rem" }} />
                        <div className="card-body">
                        <p className="card-text">{`${article.description}`}</p>
            <p className="card-text">Цена: {article.price}</p>
             {user && (<button onclick=" " name={`btn${article.id}`} type="button"
             className="btn btn-outline-primary">Добавить в избранное</button>)}
             {/* {user && user.admin && (<a href='/favorite' className="favorite">Добавить в избранное</a>)} */}
                        </div>
                      </section>
                    ))}
                </div>
            </div>
            <script defer src="js/mainPage.js"></script>
    </Layout>
  );
}

module.exports = MainPage;
