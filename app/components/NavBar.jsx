import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return ( 
        <nav className="flex items-center justify-between">
            <Link href="/">
                <Image width={200} height={200} src="/Logo.png"></Image>
            </Link>
            <ul className="flex gap-10">
                <li>
                    <Link href="/pakkujad">Teenusepakkujad</Link>
                </li>
                <li>
                    <Link href="/kuulutused">Kuulutused</Link>
                </li>
                <li>
                    <Link href="/pakkujad24">24/7 teenusepakkujad</Link>
                </li>
                <li>
                    <Link href="/meie">Teenusest</Link>
                </li>
            </ul>
            <Link className="mx-12 text-center rounded-full px-8 py-4 border-[1px] border-[var(--gray)] border-solid" href="/login">Logi sisse</Link>
        </nav>
     );
}
 
export default NavBar;