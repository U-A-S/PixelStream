import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://cdn.tailwindcss.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdn.tailwindcss.com'],
        imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
        mediaSrc: ["'self'", 'https:', 'blob:'],
        connectSrc: ["'self'"],
      },
    },
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from dist (production) or public (dev)
const staticDir = join(__dirname, '..', 'dist');
app.use(express.static(staticDir));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: '2.0.0', service: 'PixelStream' });
});

app.get('/api/videos', (req, res) => {
  // Demo video catalogue
  const videos = [
    {
      id: '1',
      title: 'Typography Animation',
      description: 'Dynamic letter-based artistic composition',
      format: 'MP4',
      quality: 'HD',
      duration: '15s',
      src: 'https://opal.google/board/blobs/a6cc2df0-89c7-459b-8f51-9f8919543499',
      thumbnail: '',
    },
  ];
  res.json({ success: true, data: videos });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(join(staticDir, 'index.html'), (err) => {
    if (err) {
      res.status(404).send('Not found – run `npm run build` first to generate the dist directory.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 PixelStream server running on http://localhost:${PORT}`);
});

export default app;
