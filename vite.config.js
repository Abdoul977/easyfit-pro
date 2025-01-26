import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    server: {
      host: true,
      port: 5173
    },
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom']
          }
        }
      }
    },
    define: {
      'process.env.VITE_APP_URL': JSON.stringify(env.VITE_APP_URL),
      'process.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL), 
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY)
    }
  }
})
