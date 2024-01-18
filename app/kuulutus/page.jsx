import Image from "next/image";

const Kuulutus = () => {
    return ( 
        <main className="px-12">
            <h1 className="text-7xl font-bold py-4">Vajan torumeest</h1>
            <div className="border-[1px] rounded-lg p-4">
                <div className="py-4 pt-12 flex">
                    <div className="flex flex-col gap-16 w-[8rem]">
                        <p className="font-bold text-xl">Kuulutus</p>
                        <p className="font-bold text-xl">Aeg</p>
                        <p className="font-bold text-xl">Asukoht</p>
                        <p className="font-bold text-xl">Teenuse valdkond</p>
                        <p className="font-bold text-xl">Eraisik</p>
                        <p className="font-bold text-xl">Kontakt</p>
                    </div>
                    <div className="flex flex-col gap-20 w-full"> 
                        <p className="border-[1px] rounded-lg w-full p-2">Vajan torumeest, kes ühedaks ära uue duššisegisti (fotol).</p>
                        <p className="border-[1px] rounded-lg w-1/3 p-2">Nädala jooksul </p>
                        <p className="border-[1px] rounded-lg w-1/2 p-2">Kuressaare</p>
                        <p className="border-[1px] rounded-lg w-1/3 p-2">Torutööd</p>
                        <p className="border-[1px] rounded-lg w-1/3 p-2">5555 5555</p>
                    </div>
                </div>
            </div>
            <Image src="/pussi.png" width="500" height="500"></Image>
        </main>
     );
}
 
export default Kuulutus;