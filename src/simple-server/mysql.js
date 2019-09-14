/**
 * On this file we have started to integrate MySQL Database.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 7777
});

con.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL DB!');
  con.query("CREATE DATABASE mydb", (err, result) => {
    if (err) throw err;
    console.log('Database created');
  });
});

app.set('view engine', 'ejs');

/**
 * include static files (for example: css files)
 */
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
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