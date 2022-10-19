const router = require('express').Router();

const bcrypt = require('bcrypt');

const Authentication = require('../../views/Authentication');
const Forgot = require('../../views/Forgot')
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Authentication, {});
});

router.post('/', async(req, res) =>{
  try{
    const {email, password} = req.body;
    const user = await User.findOne({where:{email}});
    const errMessage = "Неправильные email или пароль";
    if (!user){
      res.json({login: false, message: errMessage});
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare && user.email === email){
      res.json({login: false, message: errMessage});
    }
    if (user.admin){
      req.session.adminID = user.id;
    }else{
      req.session.userID = user.id;
    }
    res.json({login: true})
  } catch (error){
    console.log(error.message);
  }
})
router.get('/forgot', (req, res) => {
  res.renderComponent(Forgot, {});
});



module.exports = router;