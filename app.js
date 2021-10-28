const express = require('express');

const app = express();

app.use(express.static('public'));

console.log(`Server started at ${process.env.PORT}`);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
