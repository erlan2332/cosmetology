const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  // Разрешаем запросы из любого источника (*)
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Проверяем URL запроса
  if (req.url === '/appointments' && req.method === 'GET') {
    // Читаем файл appointments.json с данными о записях
    fs.readFile(path.join(__dirname, 'appointments.json'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    // Если URL не совпадает с /appointments, отправляем 404 Not Found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
