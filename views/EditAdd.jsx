const React = require('react');
const Layout = require('./Layout');

function EditAdd({ add }) {
  return (
    <Layout>
      <script defer src="https://api-maps.yandex.ru/2.1/?apikey=a6375016-4e69-4b91-949c-0b2e86a23a35&lang=ru_RU" />
      <script defer src="/js/mapEditAdd.js" />
      <form className="editAddForm" ref="uploadForm" method="post" encType="multipart/form-data" data-id={add.id} action={`/admin/${add.id}/edit`}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Категория</label>
          <input type="text" name="category" id="category" className="form-control" value={add.category} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label"> Цена</label>
          <input type="text" id="price" name="price" className="form-control" value={add.price} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Описание</label>
          <input type="text" name="description" className="form-control" id="description" value={add.description} />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Фото</label>
          <div className="mb-3">{add.photo}</div>
          <input type="file" name="photo" className="form-control" id="photo" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label"> Адрес</label>
          <div id="map" className="map" />
          <input type="text" id="address" name="address" className="form-control" value={add.address} />

        </div>
        <button type="submit" className="btn btn-primary">Подтвердить изменения</button>
        {' '}
        <button data-id={add.id} className="delete btn btn-primary">Удалить объявление</button>
      </form>
      <script defer src="/js/editAdd.js" />
    </Layout>
  );
}
module.exports = EditAdd;
