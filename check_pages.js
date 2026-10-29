import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {
  let reqPath = req.url === '/' ? '/index.html' : req.url;
  let filePath = path.join(distDir, reqPath.split('?')[0]);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.ttf': 'font/ttf',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(5234, () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const tempDir = path.join(process.env.TEMP || 'C:\\Temp', 'edgetemp_check');
  const outPdf = path.join(__dirname, 'test_output.pdf');

  if (fs.existsSync(outPdf)) fs.unlinkSync(outPdf);

  const args = [
    '--headless=new',
    `--user-data-dir=${tempDir}`,
    '--no-pdf-header-footer',
    `--print-to-pdf=${outPdf}`,
    'http://localhost:5234'
  ];

  const child = spawn(edgePath, args);
  child.on('close', (code) => {
    server.close();
    if (fs.existsSync(outPdf)) {
      const pdfBuf = fs.readFileSync(outPdf);
      const pdfStr = pdfBuf.toString('binary');
      // Count instances of /Type /Page (excluding /Pages)
      const pageMatches = pdfStr.match(/\/Type\s*\/Page\b/g);
      console.log('SUCCESS: PDF page count =', pageMatches ? pageMatches.length : 0);
    } else {
      console.log('FAILED: PDF file not created, code =', code);
    }
  });
});
