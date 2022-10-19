require('@babel/register');

const express = require('express');

const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');

const app = express();

const PORT = process.env.PORT ?? 3000;
config(app);

// routers

// здесь подключаем роуты
// const mainRouter = require('./routes/main.route');
const authRouter = require('./routes/authRouter');



// здесь запускаем роуты
// app.use('/', mainRouter);
app.use('/auth', authRouter);

// sequelize.authenticate({ logging: false });

app.listen(PORT, async () => {
  try {
    console.log(`Server started ${PORT}`);
  } catch (error) {
    console.log("something's wrong");
  }
});
