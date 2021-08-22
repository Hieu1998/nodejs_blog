const path = require('path');
const express = require('express');
const morgan = require('morgan'); //lang nghe request tu client
const handlebars = require('express-handlebars');
const app = express(); //khoi tao instance
const port = 3000; //set port

const route = require('./routes');

// join to public folder
app.use(express.static(path.join(__dirname, 'public')));

// use middleware (thanh phan trung gian giua client va server)
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
); // dinh nghia handlebars
app.set('view engine', 'hbs'); // use handlebars
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
