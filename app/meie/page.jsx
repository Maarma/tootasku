import Section4 from "../components/Section-4";
import Section2 from "../components/Section-2";
import Link from "next/link";

const Meie = () => {
    return ( 
        <main className="px-12 flex flex-col justify-center">
            <h1 className="text-7xl font-bold w-[800px] pb-12">ÜHENDAME TEENUSE PAKKUJAD & KLIENDID</h1>
            <p className="w-[90rem] pb-24">Töötasku on teenuse vahendus keskkond, kust leiad enda murele lihtsa vaevaga lahenduse. Pane oma töö üles või vaata teenusepakkujate andmebaasi. Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.</p>
            <p className="w-[90rem] pb-36">Töötasku on teenuse vahendus keskkond, kust leiad enda murele lihtsa vaevaga lahenduse. Pane oma töö üles või vaata teenusepakkujate andmebaasi. Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.</p>
            <Section2></Section2>
            <div className="w-[90%] mx-auto">
                <h2 className="text-5xl font-bold text-center">Võta meiega ühendust</h2>
                <form className="pb-12">
                    <p className="py-4">Nimi:</p>
                    <input type="text" className="rounded-full w-full px-8 py-2 border-2 border-[var(--orange)] border-solid"></input>
                    <p className="py-4">E-kirja aadress:</p>
                    <input type="text" className="rounded-full w-full px-8 py-2 border-2 border-[var(--orange)] border-solid"></input>
                    <p className="py-4">Sõnum:</p>
                    <input type="text" className="rounded-xl w-full h-[12rem] px-8 py-2 border-2 border-[var(--orange)] border-solid"></input>
                </form>
                <Link className="text-bold text-center text-[var(--white)] rounded-full px-36 py-4 border-[1px] bg-[var(--orange)]" href="/">Saada kiri</Link>
            </div>
            <Section4></Section4>
        </main>
    );
}
 
export default Meie;