const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public')); // HTML, CSS, JS 파일을 public 폴더에서 제공

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
