import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
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
  },
  {
    provider: fontProviders.fontsource(),
    name: "Inter",
    cssVariable: "--font-inter",
  }]
});
