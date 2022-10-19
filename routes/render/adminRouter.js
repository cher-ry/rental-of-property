const router = require('express').Router();
const AdminPage = require('../../views/AdminPage');
const { Article } = require('../../db/models');
const NewAdd = require('../../views/NewAdd');
const EditAdd = require('../../views/EditAdd')

router.route('/').get(async (req, res) => {
  const articles = await Article.findAll({raw:true})
  console.log(articles)
  res.renderComponent(AdminPage, {articles});
});

router.route('/new').get(async (req, res) => {
    
    res.renderComponent(NewAdd);
  });

router.route('/:id/edit')
.get(async (req, res) => {
    const {id} = req.params
    const add  = await Article.findOne({where:{
        id
    }})
    res.renderComponent(EditAdd,{add});
  })
.put(async(req,res)=>{
    try {
        const entry = await Entry.update({
          title: req.body.title,
          body: req.body.body,
        }, {
          where: { id: req.params.id },
          returning: true,
          plain: true,
        });
    
        res.json({ isUpdateSuccessful: true, entryID: entry[1].id });
      } catch (error) {
        res.json({
          isUpdateSuccessful: false,
          errorMessage: 'Не удалось обновить запись в базе данных.',
        });
      }
})

module.exports = router;
