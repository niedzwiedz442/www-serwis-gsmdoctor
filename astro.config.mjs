// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Bitsumishi",
      cssVariable: "--font-bitsumishi",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Bitsumishi-Regular.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter"
    },
  ],
});
