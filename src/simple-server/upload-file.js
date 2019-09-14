/**
 * Upload File
 */
const express = require('express');
const app = express();
const formidable = require('formidable');
const mv = require('mv');

app.set('view engine', 'ejs');

/**
 * include static files (for example: css files)
 */
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/upload-file', (req, res) => {
  res.render('upload-file', {imgPath: '', successNotif: false});
});

app.post('/fileupload', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const oldpath = files.filetoupload.path;
    const newpath = `${__dirname}/public/uploaded-files/${files.filetoupload.name}`;
    mv(oldpath, newpath, (err) => {
      if (err) throw err;

      let src = '';
      let notif = true;
      if (files.filetoupload.type === 'image/jpeg') {
        notif = false;
        src = `/public/uploaded-files/${files.filetoupload.name}`;
      }

      res.render('upload-file', {imgPath: src, successNotif: notif});
      res.end();
    });
  });
});

app.listen(7777);
console.log('We are listening the PORT 7777.');
