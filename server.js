const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

// ✅ 새 라우트 추가
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
