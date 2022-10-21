const React = require('react');
const Layout = require('./Layout');

function AdminPage({ articles, user }) {
  return (
    <Layout user={user}>
      <a className="nav-link" href="/admin/new">Добавить</a>
      <div className="list-group">
        <caption>Список обявлений</caption>
        <table>

          <tr>
            <th>id</th>
            <th>Категория</th>
            <th>Цена</th>
            <th>Адрес</th>
            <th>Описание</th>
            <th>Действия</th>
          </tr>
          {articles.map((article) => (
            <tr>
              <td>{article.id}</td>
              <td>{article.category}</td>
              <td>{article.price}</td>
              <td>{article.address}</td>
              <td>{article.description}</td>
              <td><a href={`/admin/${article.id}/edit`}>Редактировать</a></td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  );
}

module.exports = AdminPage;
