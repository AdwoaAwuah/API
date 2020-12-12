const bookRoutes = (app, fs) => {
    // variables
    const dataPath = './data/books.json';
  
    // READ
    app.get('/books', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = bookRoutes;