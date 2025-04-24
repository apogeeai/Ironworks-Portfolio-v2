const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Handle favicon.ico
  if (req.url === '/favicon.ico') {
    const faviconPath = path.join(PUBLIC_DIR, 'favicon.ico');
    if (fs.existsSync(faviconPath)) {
      res.setHeader('Content-Type', 'image/x-icon');
      fs.createReadStream(faviconPath).pipe(res);
      return;
    }
    res.statusCode = 404;
    res.end();
    return;
  }
  
  // Clean URL
  let url = req.url;
  if (url.includes('?')) {
    url = url.substring(0, url.indexOf('?'));
  }
  
  // Check if path is a directory
  let filePath = path.join(PUBLIC_DIR, url);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  
  // Check if file exists
  const ext = path.extname(filePath);
  if (!ext || ext === '') {
    // If not a file with extension, serve index.html for SPA
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`File ${filePath} not found, serving index.html`);
      filePath = path.join(PUBLIC_DIR, 'index.html');
      
      // If even index.html doesn't exist, return 404
      if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        res.end('File not found');
        return;
      }
    }
    
    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Server Error: ${err.message}`);
        return;
      }
      
      const contentType = MIME_TYPES[path.extname(filePath)] || 'application/octet-stream';
      res.setHeader('Content-Type', contentType);
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}); 