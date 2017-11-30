const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 8080;
app.listen(8080);

//localhost:8080
