const express = require('express');
const app = express();
const PORT = 4000;

//listen to server
app.listen(PORT, () => {
  console.log(`Server is listining on port ${PORT}`);
});
