import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],

  // 🚨 VERY IMPORTANT FOR VERCEL
  base: "/",

  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
          }
        }
      }
    }
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },

  preview: {
    port: 5173
  },

  server: {
    open: true
  }
})
