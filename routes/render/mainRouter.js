const router = require('express').Router();
const MainPage = require('../../views/MainPage');
const {Article} = require('../../db/models')

router.route('/')
.get(async (req, res) => {
  res.renderComponent(MainPage, {});
})
.post(async(req,res)=>{
  try {
    const newAdd = await Article.create({
      category: req.body.category,
      price: req.body.price,
      description:req.body.description,
      photo:req.body.photo,
      address:req.body.address
    });

    res.redirect(`/`);
  } catch (error) {
    console.log(error.message)}
})
module.exports = router;
