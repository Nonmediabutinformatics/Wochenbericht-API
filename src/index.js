const https = require('https');
const fs = require('fs');

// Read the SSL/TLS certificates
const privateKey = fs.readFileSync('privateKey.pem', 'utf8');
const certificate = fs.readFileSync('certificate.pem', 'utf8');
const ca = fs.readFileSync('ca.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

const server = https.createServer(credentials, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! (over HTTPS)');
});

server.listen(3000, () => {
  console.log('Server running at https://localhost:3000/');
});
