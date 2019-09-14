const fs = require('fs');

fs.readFile('data/article.txt', 'utf8', (err, data) => {
  console.log('FILE READING... ', data);
});

// fs.writeFile('new_file.txt', 'My name is Andrey.', () => {});
// fs.mkdirSync('new-dir');
// fs.mkdir('new-dir', () => {
//   fs.writeFile('./new-dir/new_file.txt', 'My name is Andrey.', () => {
//     console.log('The file is created.');
//   })
// });
// fs.rmdirSync('new-dir');
// fs.unlink('./new-dir/new_file.txt', () => {});
// fs.rmdir('new-dir', () => {});
// fs.writeFile('streams.js', '', () => {});