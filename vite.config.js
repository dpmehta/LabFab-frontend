import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        "E:/Project-AWT/LabFab/backend/assets/images/component-complaint-images",
        "E:/Project-AWT/LabFab/backend/assets/images/computer-complaint-images",
        "E:/Project-AWT/LabFab/frontend/src",
      ],
    },
  },
});
