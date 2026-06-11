import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Import customowej czcionki
  fonts: [{
    provider: fontProviders.local(),
    name: "Bitsumishi",
    cssVariable: "--font-bitsumishi",
    options: {
      variants: [{
        src: ["./src/assets/fonts/Bitsumishi.ttf"],
        wieght: "normal",
        style: "normal"
      }]
    }
  }]
});
