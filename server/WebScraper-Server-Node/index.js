const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const homeRoutes = require('./routes/HomeRoute');
const signupRoutes = require('./routes/SingupRoute');
const loginRoutes = require('./routes/LoginRoute');

const app = express();
app.use(bodyParser.json());

app.use(cors({ origin: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
})

app.use(signupRoutes);
app.use(homeRoutes);
app.use(loginRoutes);

const PORT = 3001;

// Connection to the database
mongoose.connect(
    'mongodb+srv://adityakharadkar27:'
     + encodeURIComponent('Admin@2706')
      + '@cluster0.ooxgay7.mongodb.net/webScraper?retryWrites=true&w=majority', {
        useNewUrlParser: true,
      })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    })