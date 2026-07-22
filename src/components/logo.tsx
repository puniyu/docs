import logo from "@/assets/logo.webp"
import { Image } from "astro:assets"

export const Logo = () => {
    return (
        <div>
            <Image src={logo} alt="logo" />
        </div>
    );
};
export default Logo;