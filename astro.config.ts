import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  server: {
      port: 10721,
	},
  integrations: [
      starlight({
          plugins: [ion()],
          title: "Puniyu Docs",
          social: [{
              icon: "github",
              label: "GitHub",
              href: "https://github.com/puniyu/puniyu",
          }],
          sidebar: [
              {
                  label: "指南",
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: "Example Guide", slug: "guides/example" },
                  ],
              },
              {
                  label: "Reference",
                  items: [{ autogenerate: { directory: "reference" } }],
              },
          ],
      }),
      react(),
	],
    i18n: {
        locales: ["zh"],
        defaultLocale: "zh"
    }
});