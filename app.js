require('@babel/register');
// использование данных из конфигурации файла .env
require('dotenv').config();
const express = require('express');

const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

// routers

// здесь подключаем роуты

const regoRouter = require('./routes/render/registration');
const mainRouter = require('./routes/render/mainRouter');

const authRouter = require('./routes/render/authRouter');
const adminRouter = require('./routes/render/adminRouter');
const { transporter } = require('./config/nodemailerConfig');
const logoutRouter = require('./routes/render/logoutRouter');
const dbRouter = require('./routes/render/dbRouter')
const favRouter = require('./routes/render/favoriteRouter');

// здесь запускаем роуты
app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/registration', regoRouter);
app.use('/admin', adminRouter);
app.use('/logout', logoutRouter);

app.use('/favorites', favRouter);
app.use('/db', dbRouter);
sequelize.authenticate({ logging: false });

app.listen(PORT, async () => {
  console.log(`Server started ${PORT}`);
  try {
    // todo await sequelize.authenticate()
  } catch (error) {
    console.log("something's wrong");
  }

  try {
    await transporter.verify();
    console.log('Server is ready to send emails');
  } catch (error) {
    console.log('Problem with Nodemailer:');
    console.log(error.message);
  }
});
