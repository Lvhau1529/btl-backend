const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const homeRouter = require('./routes/home.route');
const productRouter = require('./routes/product.route');
const adminRouter = require('./routes/admin.route');
const authRouter = require('./routes/auth.route');
const middleware = require('./middlewares/auths.middleware');

const app = express();

app.use(cookieParser('Hi I am Trang'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())

const url = 'mongodb+srv://admin:123@cluster0.xw9eb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose
  .connect(url, options)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err, 'error');
  });

app.use('/', homeRouter);
app.use('/products', productRouter);
app.use('/admin', middleware.authLogin, adminRouter);
app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
