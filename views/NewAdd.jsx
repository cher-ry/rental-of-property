const React = require('react')
const Layout = require('../views/Layout')

function NewAdd(){
    return(
        <Layout>
<form className="newAddForm" method="POST" action="/admin">
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Категория</label>
          <input type="text" name="category" id="category" className="form-control"  placeholder="квартира, комната или дом"/>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label"> Цена</label>
          <input type="text" id="price" name="price" className="form-control"  />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Описание</label>
          
          <input type="text" rows="3" cols="40" name="password" className="form-control" placeholder="Например: Сдаю прекрасную квартиру на Невском" id="description" />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Фото</label>
          <input type="file" name="photo" className="form-control" id="photo" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label"> Адрес</label>
          <input type="text" id="address" name="address" className="form-control"  />
        </div>
        <div className="mb-3">
          <label className="form-label">Добавление точки на карте</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </Layout>
    )
    }
module.exports = NewAdd