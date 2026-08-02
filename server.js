import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Serve static assets with caching headers
app.use(express.static(__dirname, {
  maxAge: '1d',
  etag: true,
}));

// Clean URL Route Definitions matching vercel.json
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/work', (req, res) => res.sendFile(path.join(__dirname, 'work.html')));
app.get('/services', (req, res) => res.sendFile(path.join(__dirname, 'services.html')));
app.get('/calculator', (req, res) => res.sendFile(path.join(__dirname, 'calculator.html')));
app.get('/process', (req, res) => res.sendFile(path.join(__dirname, 'process.html')));
app.get('/clients', (req, res) => res.sendFile(path.join(__dirname, 'clients.html')));
app.get('/studios', (req, res) => res.sendFile(path.join(__dirname, 'studios.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));

app.get('/socia_agency_website', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback route for 404 handling
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Express Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`SOCIA Agency production server running at http://localhost:${PORT}`);
});
