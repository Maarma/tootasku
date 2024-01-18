import Image from "next/image";

const Section1 = () => {
    return ( 
        <section className="flex justify-center pb-16">
            <div className="w-[86rem] h-[38rem] bg-[url('/Wow.png')] bg-center rounded-xl">
                <div className="flex h-full">
                    <div className="mt-24 ml-10 gap-4 flex flex-col">
                        <p>Tere tulemast  TÖÖTASKUSSE</p>
                        <h1 className="text-7xl font-bold w-[800px]">ÜHENDAME TEENUSE PAKKUJAD & KLIENDID</h1>
                        <p>Viime omavahel kokku töötegija ja abivajaja</p>
                        <div class="w-[27rem] rounded-full bg-[var(--white)] flex items-center justify-between mt-8">
                            <input type="text" placeholder="Sisesta otsingusõna" className="bg-transparent focus:outline-none py-4 px-8 w-full"></input> 
                            <button className="py-4 px-8 rounded-full border-l w-56 bg-[var(--black)] text-[var(--white)] items-center">Otsi lehelt</button>
                        </div>
                    </div>
                    <Image className="self-end" src="/BOB.png" width={600} height={600}></Image>
                </div>

            </div>
        </section>
     );
}
 
export default Section1;