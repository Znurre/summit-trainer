import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command: cmd }) => ({
    plugins: [react()],
    build: {
        outDir: "docs"
    },
    base: cmd == "build" ? "/summit-trainer" : '/',
}))
