require('@babel/register');

const express = require('express');
// const session = require('express-session');


const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');
const regoRouter = require('./routes/render/registration')

const app = express();

const PORT = process.env.PORT ?? 3000;

// routers

// здесь подключаем роуты

// const mainRouter = require('./routes/main.route');

// config(app);

// здесь запускаем роуты
// app.use('/', mainRouter);
app.use('/registration',regoRouter)

// sequelize.authenticate({ logging: false });

app.listen(PORT, async () => {
  try {
    console.log(`Server started ${PORT}`);
  } catch (error) {
    console.log("something's wrong");
  }
});