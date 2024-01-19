import Link from "next/link";

const Kusimused = () => {

    const items = [
        {
          title: "Kellele helistada või kirjutada, kui soovin infot?",
          descripton: "Vastus"
        },
        {
          title: "Kuidas saan hakata ärikliendiks?",
        },
        {
          title: "Mida teha kui pole saanud arvet?",
        },
        {
            title: "Mida teha kui ettevõtte andmed on muutunud?",
          },
          {
            title: "Mida teha kui pole saanud arvet?",
          },
          {
            title: "Kuidas saan hakata ärikliendiks?",
          },
          {
            title: "Mida teha, kui klient on edastanud valed kontaktandmed?",
          },
      ];

    return ( 
        <main className="px-12">
            <div className="pb-6">
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl py-4">Korduma kippuvad küsimused</h1>
                    <div class="w-[27rem] rounded-full bg-[var(--white)] -space-x-8 flex items-center">
                        <input type="text" placeholder="Sisesta otsingusõna" className="mx-12  rounded-full px-8 py-4 border-[1px] border-[var(--gray)] border-solid"></input> 
                        <button className="relative -left-16 py-4 px-8 rounded-full border-l w-56 bg-[var(--orange)] text-[var(--white)] items-center whitespace-nowrap">Otsi lehelt</button>
                    </div>
                </div>
            </div>
            <ul>
                {items.map((item, index) => (
                <li key={index} className="p-4 flex flex-col items-start gap-4">
                    <button className="text-bold text-center rounded-xl px-8 py-4 w-[12rem] border-[1px] bg-[var(--light-orange)] w-full" >{item.title}</button>
                </li>
                ))}
            </ul>
        </main>
    );
}

 
export default Kusimused;