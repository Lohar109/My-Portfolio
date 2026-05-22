import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import statsHandler from './api/stats.js'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'local-stats-api',
      configureServer(server) {
        server.middlewares.use('/api/stats', (req, res) => {
          Promise.resolve(statsHandler(req, res)).catch((error) => {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.end(JSON.stringify({ error: 'Failed to load live stats', details: error.message }))
          })
        })
      }
    }
  ],
})
