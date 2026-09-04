// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	server: {
		port: 10721,
	},
	i18n: {
		locales: ["zh", "en"],
		defaultLocale: "zh",
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		},
	},
	integrations: [
		starlight({
			title: "Puniyu Docs",
			social: [{
				icon: "github",
				label: "GitHub",
				href: "https://github.com/puniyu/puniyu",
			}],
			sidebar: [
				{
					label: "Guides",
					items: [
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					items: [{ autogenerate: { directory: "reference" } }],
				},
			],
			customCss: [
				"./src/styles/global.css",
			],
			credits: false,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
