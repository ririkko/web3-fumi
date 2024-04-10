const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'Variant2.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('サーバーエラー');
      console.error(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content, 'utf-8');
    }
  });
}).listen(PORT, () => console.log(`ポート ${PORT} でサーバーが起動しました`));