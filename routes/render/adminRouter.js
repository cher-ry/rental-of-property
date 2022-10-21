const router = require('express').Router();
const path = require('path');
const AdminPage = require('../../views/AdminPage');
const { Article } = require('../../db/models');
const NewAdd = require('../../views/NewAdd');
const EditAdd = require('../../views/EditAdd');

router.route('/')
  .get(async (req, res) => {
    if (req.session.adminID) {
      const articles = await Article.findAll({ raw: true });
      res.renderComponent(AdminPage, { articles });
    } else {
      res.redirect('/auth');
    }
  })
  .post(async (req, res) => {
    const { photo } = req.files;

    const photopath = path.resolve(__dirname, '../../public/images', photo.name);

    photo.mv(photopath, (err) => {
      if (err) { return res.status(500).send(err); }
    });
    try {
      const newAdd = await Article.create({
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        photo: photopath,
        address: req.body.address,
      });

      res.redirect('/');
    } catch (error) {
      console.log(error.message);
    }
  });

router.route('/new').get(async (req, res) => {
  res.renderComponent(NewAdd);
});

router.route('/:id/edit')
  .get(async (req, res) => {
    const { id } = req.params;
    const add = await Article.findOne({
      where: {
        id,
      },
    });
    res.renderComponent(EditAdd, { add });
  })
  .post(async (req, res) => {
    const { photo } = req.files;
    const photopath = path.resolve(__dirname, '../../public/images', photo.name);

    photo.mv(photopath, (err) => {
      if (err) { return res.status(500).send(err); }

      res.send('File uploaded!');
    });
    try {
      const entry = await Article.update({
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        photo: photopath,
        address: req.body.address,
      }, {
        where: { id: req.params.id },
      });

      res.json({ isUpdateSuccessful: true });
    } catch (error) {
      res.json({
        isUpdateSuccessful: false,
        errorMessage: 'Не удалось обновить объявление в базе данных.',
      });
    }

    res.send({ ok: 'test' });
  });

router.delete('/:id', async (req, res) => {
  try {
    await Article.destroy({ where: { id: req.params.id } });
    res.json({ isDeleteSuccessful: true });
  } catch (error) {
    res.json({
      isDeleteSuccessful: false,
      errorMessage: 'Не удалось удалить объявление из базы данных.',
    });
  }
});
module.exports = router;
