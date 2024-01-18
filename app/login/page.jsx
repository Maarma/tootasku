import Image from "next/image";
import Link from "next/link";

const login = () => {
    return (
        <main className="flex items-center justify-center gap-12 flex-col py-24">
            <h1 className="font-bold text-2xl">Logi sisse</h1>
            <div className="flex gap-8">
                <Link href="/"><Image src="/Fu6k.png" width={40} height={40}></Image></Link>
                <Link href="/"><Image src="/gAAy.png" width={40} height={40}></Image></Link>
                <Link href="/"><Image src="/OnlyFans.png" width={40} height={40}></Image></Link>
            </div>
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/nopassport.png" width={50} height={50}></Image>
                    <p className="px-2">ID-kaart</p>
                </Link>
                <Link href="/" className="flex items-center">
                    <Image src="/TouchYour____.png" width={30} height={30}></Image>
                    <p className="px-2">Mobiil-ID</p>
                </Link>
                <Link href="/" className="flex items-center">
                    <Image src="/WTF.png" width={40} height={40}></Image>
                    <p className="px-2">Smart-ID</p>
                </Link>
            </div>
            <div className="flex flex-col justify-center pb-24">
                <div>
                    <input type="text" placeholder="Kasutajanimi" className="border-[1px] rounded-md text-center px-8 py-2"></input>
                    <input type="password" placeholder="Parool" className="border-[1px] rounded-md text-center px-8 py-2"></input>
                </div>
                <div className="pt-6 flex justify-between">
                    <div className="flex">
                        <input type="checkbox" className="mx-2 w-4"></input>
                        <p>Jäta mind meelde</p>
                    </div>
                    <Link href="/">Unustasid parooli?</Link>
                </div>
                <div className="flex flex-col pt-16">
                    <button className="bg-[var(--orange)] text-[var(--white)] rounded-md text-center px-8 py-2 mb-6">Logi sisse</button>
                    <Link href="/" className="border-[1px] rounded-md text-center px-8 py-2">Registeeri kliendiks/teenusepakkujaks</Link>
                </div>
            </div>
        </main>
    );
}
 
export default login;