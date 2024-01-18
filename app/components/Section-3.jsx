import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
    return ( 
        <section className="flex justify-center flex-col pb-16 w-[80%] mx-auto">
            <h1 className="text-5xl font-bold mx-auto text-center w-[57rem]">Leia omale lähim teenusepakkuja või kiireim tööots</h1>
            <div className="flex py-12">
                <div>
                    <h2 className="font-bold text-5xl py-12">Kõik teenused ühest kohast sinu piirkonnas</h2>
                    <p className="w-[29rem] pb-16">Töötasku on teenuse vahendus keskkond, kust leiad enda murele lihtsa vaevaga lahenduse. Pane oma töö üles või vaata teenusepakkujate andmebaasi.</p>
                    <div className="pb-16 justify-self-start">
                        <Link href="/lisauus" className="text-center rounded-full px-8 py-4 bg-[var(--black)] text-[var(--white)]">Jäta kuulutus</Link>
                        <Link href="/login" className="mx-12 text-center rounded-full px-8 py-4 border-[1px] border-[var(--gray)] border-solid">Registreeri oma teenus</Link>
                    </div>
                    <ul className="flex gap-8">
                        <li>
                            <h3 className="font-bold text-7xl">500+</h3>
                            <p>Klienti</p>
                        </li>
                        <li>
                            <h3 className="font-bold text-7xl">1000+</h3>
                            <p>Pakkujat</p>
                        </li>
                        <li>
                            <h3 className="font-bold text-7xl">10000+</h3>
                            <p>Tööotsa</p>
                        </li>
                    </ul>
                </div>
                <Image width={500} height={500} src="/BISNUS.png"></Image>
            </div>
        </section>
     );
}
 
export default Section3;