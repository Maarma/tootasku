import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="flex justify-center pb-12">
            <ul className="flex gap-10">
                <li>
                    <Link href="/tingimused">Tingimused</Link>
                </li>
                <li>
                    <Link href="/kkk">KKK</Link>
                </li>
                <li>
                    <Link href="/meie">Võta meiega ühendust</Link>
                </li>
                <li>
                    <Link href="/privaatsus">Privaatsustingimused</Link>
                </li>
            </ul>
        </footer>
     );
}
 
export default Footer;