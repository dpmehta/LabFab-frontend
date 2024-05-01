import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        "E:/Lab Portal/lab-portal-backend/assets/images/component-complaint-images",
        "E:/Lab Portal/lab-portal-backend/assets/images/computer-complaint-images",
        "E:/Lab Portal/Lab-Portal/src",
      ],
    },
  },
});
