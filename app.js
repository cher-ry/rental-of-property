require('@babel/register');

const express = require('express');


const config = require('./config/serverConfig');
const { sequelize } = require('./db/models');



const app = express();

const PORT = process.env.PORT ?? 3000;
config(app);

// routers

// здесь подключаем роуты


const regoRouter = require('./routes/render/registration')
const mainRouter = require('./routes/render/mainRouter');




const authRouter = require('./routes/render/authRouter');
const adminRouter = require('./routes/render/adminRouter')



// здесь запускаем роуты
app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/registration',regoRouter)
app.use('/admin',adminRouter)

// sequelize.authenticate({ logging: false });


app.listen(PORT, async () => {
  try {
    console.log(`Server started ${PORT}`);
  } catch (error) {
    console.log("something's wrong");
  }
});
