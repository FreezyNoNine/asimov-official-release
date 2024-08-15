const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');

app.use(session({
    secret: 'votre_secret_session',
    resave: false,
    saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
