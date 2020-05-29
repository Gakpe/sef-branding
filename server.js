const express = require('express');
const path = require('path');

const app = express();


// Init the Parseur Middleware //
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Serve static assets for production //

if(process.env.NODE_ENV === 'production') {
  // Alors il faut set un static folder //
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'build','index.html'));
  });
}

// Setting du port //
const port = process.env.PORT || 8000;
app.listen(port,() => console.log(`Serveur starting on ${port}`));
