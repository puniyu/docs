import logo from "@/assets/logo.webp";
import type { APIRoute } from "astro";
import { getImage } from "astro:assets";

export const GET: APIRoute = async ({ request }) => {
    const source = await getImage({ src: logo });
    const url = new URL(source.src, new URL(request.url).origin);
    const image = await fetch(url);
    return new Response(await image.arrayBuffer());
};
