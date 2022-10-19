const React = require('react')
const Layout = require('../views/Layout')

function EditAdd({add}){
    return(
        <Layout>
<form className="editAddForm" encType="multipart/form-data" data-id={add.id} action={`/admin/${add.id}/edit`}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Категория</label>
          <input type="text" name="category" id="category" className="form-control"  value={add.category}/>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label"> Цена</label>
          <input type="text" id="price" name="price" className="form-control" value={add.price} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Описание</label>
          <textarea rows="3" cols="40" id="description" className="form-control" value={add.description}></textarea>
          {/* <input type="text" name="password" className="form-control" id="description" /> */}
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Фото</label>
          <div className="mb-3">{add.photo}</div>
          <input type="file" name="photo" className="form-control" id="photo" value={add.photo}/>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label"> Адрес</label>
          <input type="text" id="address" name="address" className="form-control" value={add.address} />
        </div>
        <div className="mb-3">
          <label className="form-label">Добавление точки на карте</label>
        </div>
        <button type="submit" className="btn btn-primary">Подтвердить изменения</button> <button  data-id={add.id} className="delete btn btn-primary">Удалить объявление</button>
      </form>
      <script defer src="/js/editAdd.js"></script>
        </Layout>
    )
    }
module.exports = EditAdd