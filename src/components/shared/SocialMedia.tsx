import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandTwitterFilled, IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function SocialMedia() {
    return(
        <div>
            <ul className="flex items-center gap-5 text-sm text-white uppercase">
                <li className="main-text-hover">
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <IconBrandFacebook />
                    </Link>
                </li>
                <li className="main-text-hover">
                    <Link href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <IconBrandWhatsapp />
                    </Link>
                </li>
                <li className="main-text-hover">
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <IconBrandInstagram />
                    </Link>
                </li>
            </ul>
        </div>
    )
}