import Link from "next/link";

const LisaUus = () => {
    return ( 
        <main className="px-12">
            <h1 className="text-7xl font-bold">Lisa uus kuulutus</h1>
            <div className="border-[1px] rounded-lg p-4">
                <h2 className="font-bold text-2xl">Lisa siia oma tööampsu kuulutus</h2>
                <p className=" text-[var(--blue)] w-72">Täida kõik lahtrid võimalikult täpse informatsiooniga</p>
                <div className="py-4 pt-12 flex">
                    <div className="flex flex-col gap-16 w-[8rem]">
                        <p className="font-bold text-xl pr-24">Pealkiri</p>
                        <p className="font-bold text-xl">Kuulutuse tekst</p>
                        <p className="font-bold text-xl">Vali teenuse osutamis aeg</p>
                        <p className="font-bold text-xl">Asukoht</p>
                        <p className="font-bold text-xl">Teenuse valdkond</p>
                        <p className="font-bold text-xl">Eraisikule või ettevõtteele</p>
                        <p className="font-bold text-xl">Lisa foto</p>
                    </div>
                    <form className="flex flex-col gap-20 w-full"> 
                        <input type="text" placeholder="Siia sisesta vajamineva teenuse täpne nimetus" className="border-[1px] rounded-lg w-full p-2"></input>
                        <input type="text" placeholder="Kirjuta siia vajamineva teenuse pikem kirjeldus" className="border-[1px] rounded-lg w-full p-2"></input>
                        <input type="datetime-local" className="border-[1px] rounded-lg w-full p-2"></input>
                        <input type="text" placeholder="Kirjuta siia  elukoht (linn / küla / vald)" className="border-[1px] rounded-lg w-full p-2"></input>
                        <input className="border-[1px] rounded-lg w-full p-2" placeholder="Siia kirjutad teenuse valdkonna"></input>
                        <div className="flex px-4">
                            <input type="checkbox" className="w-10"></input>
                            <p>Eraisikule</p>
                            <input type="checkbox" className="w-10"></input>  
                            <p>Ettevõtteele</p>  
                        </div>
                        <input type="file" className="border-[1px] rounded-lg w-full p-2"></input>
                    </form>
                </div>
            </div>
        <Link href="/kuulutus/" className="m-2 text-bold text-center rounded-full px-8 py-4 w-[12rem] text-[var(--white)] border-[1px] bg-[var(--orange)]">Lisan kuulutuse</Link>
        </main>
     );
}
 
export default LisaUus;