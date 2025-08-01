import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return (
        <Link href="/">
            <Image src="/shared/desktop/logo.svg" alt="Logo" width={143} height={25} />
        </Link>
    )
}