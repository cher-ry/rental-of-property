// использование данных из конфигурации файла .env
require('dotenv').config();

// импорт пакета для работы с почтой
const nodemailer = require('nodemailer');

// конфигурация nodemailer транспортёра почты
const transporter = nodemailer.createTransport(
  {
    host: 'smtp.yandex.ru',
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  },
  {
    from: 'Experss Skeleton App <Experss Skeleton App>',
  },
);

const messageCreator = (to, subject, text) => ({
  from: process.env.EMAIL_USER,
  to,
  subject,
  text,
  html: "<b>Hello world?</b>"
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email send:`, info);
    }
  });
};

module.exports = { mailer, messageCreator, transporter };