import Link from "next/link";

const Pakkujad = () => {
    const items = [
    {
      title: "Arens Torutööd OÜ",
      description: "Torutööd "
    },
    {
      title: "Melli Ehitus OÜ",
      description: "Üldehitus"
    },
    {
      title: "EBC Ehitus AS",
      description: "Üldehitus"
    },
  ];

    return ( 
        <main className="px-12">
            <div className="pb-6">
                <div className="flex justify-between">
                    <h1 className="font-bold text-7xl">Kõik pakkujad</h1>
                    <div class="w-[27rem] rounded-full bg-[var(--white)] flex items-center justify-between mt-8">
                        <input type="text" placeholder="Sisesta otsingusõna" className="bg-transparent focus:outline-none py-4 px-8 w-full"></input> 
                        <button className="py-4 px-8 rounded-full border-l w-56 bg-[var(--black)] text-[var(--white)] items-center">Otsi lehelt</button>
                    </div>
                </div>
                <div className="flex justify-end py-12">
                    <button className="mx-6 text-center rounded-full px-12 py-4 border-[1px] border-[var(--gray)] border-solid">KÕIK</button>
                    <select className="text-center rounded-full px-8 py-4 border-[1px] border-[var(--gray)] border-solid appearance-none">
                        <option value="1">Teenused valdkond</option>
                        <option value="Option 2">Värvimine</option>
                        <option value="Option 3">Remont</option>
                        <option value="Option 4">Rookimine</option>
                        <option value="Option 5">Koristus</option>
                    </select>
                </div>
            </div>
            <ul>
                {items.map((item, index) => (
                <li key={index} className="p-4 flex flex-col items-start gap-8 pb-16">
                    <h2 className='font-bold text-xl'>{item.title}</h2>
                    <p>{item.description}</p>
                    <Link className="text-bold text-center rounded-full px-8 py-4 w-[12rem] border-[1px] bg-[var(--yellow)]" href="/">Ava profiil</Link>
                </li>
                ))}
            </ul>
        </main>
     );
}
 
export default Pakkujad;