/**
 * On this file we have started to use Express framework and EJS JavaScript templating.
 * https://expressjs.com/ru/
 * https://ejs.co/
 */
const express = require('express');
const app = express();
const urls = require('./constants/urls');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

/**
 * include static files (for example: css files)
 */
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  // res.send('This is home');
  // res.sendFile(`${__dirname}${urls.HTML_URL}/index.html`);
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/about', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render('about-success', {data: req.body});
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/news/:id', (req, res) => {
  const obj = {
    title: 'News title',
    paragraphs: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3']
  };
  res.render('news-details', {newsId: req.params.id, data: obj});
});

app.listen(7777);
console.log('We are listening the PORT 7777.');

