const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const errorController = require('./controllers/error');
const User = require('./models/user');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('67a5f3d31e80cf396d9024d9')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to server and listening at port 3000');
    User.findOne()
      .then((user) => {
        if (!user) {
          const user = new User({
            name: 'Max',
            email: 'test@mail.com',
            carts: { items: [] },
          });
          user.save();
        }
      })
      .catch((err) => console.log(err));

    app.listen(3000);
  })
  .catch((err) => console.log(err));
