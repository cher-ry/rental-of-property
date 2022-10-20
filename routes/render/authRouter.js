const router = require('express').Router();

const bcrypt = require('bcrypt');

const Authentication = require('../../views/Authentication');
const Forgot = require('../../views/Forgot')
const { User } = require('../../db/models');
const { mailer, messageCreator } = require('../../config/nodemailerConfig');

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

router.post('/forgot', async (req, res) => {
    // получение значений из тела запроса
    const { email } = req.body;

    // поиск в БД по email и получение объекта пользователя
    const userInDb = await User.findOne({ where: { email }, raw: true });

    if (userInDb) {
      // формирование письма на почту + клиентское информирование
      console.log(userInDb);

      // фактическая отправка письма на почту пользователя
      mailer(messageCreator(userInDb.email, 'Reset your password', `
        If you have forgotten your account password, you can recover it at any time.
      `));

      // JSON ответ для редиректа на панель управления
      res.json({ reset: true, message: 'Password reset email has been sent' });
    } else {
      // JSON ответ с сообщением в случае некорректного ввода или отсутствия пользователя в БД
      res.status(403).json({ reset: false, message: 'This email is not used in the system' });
    }
  });


module.exports = router;