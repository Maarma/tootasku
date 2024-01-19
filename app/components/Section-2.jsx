import { LuMessagesSquare, LuPenLine } from "react-icons/lu";
import { LiaToolsSolid } from "react-icons/lia";
import Link from "next/link";

const Section2 = () => {
    return ( 
        <section className="flex justify-center flex-col pb-16">
            <div className="flex flex-col items-center">
                <p>Kolm sammu, kolm minutit</p>
                <h1 className="text-5xl font-bold">Kõik teenused kiirelt ühest kohast</h1>  
            </div>
            <ul className="flex justify-evenly w-[90rem] mx-auto pt-12">
                <li className="w-[24rem]">
                    <LuMessagesSquare  className="text-8xl text-[var(--orange)]"/>
                    <h2 className="font-bold text-3xl py-6">Suhtle pakkujaga</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                </li>
                <li className="w-[24rem]">
                    <LiaToolsSolid className="text-8xl text-[var(--gray)]"/>
                    <h2 className="font-bold text-3xl py-6">Vali teenus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                </li>
                <li className="w-[24rem]">
                <Link href="/regamine/">
                    <LuPenLine className="text-8xl text-[var(--green)]"/>
                    <h2 className="font-bold text-3xl py-6">Registreeri konto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                </Link>
                </li>
            </ul>
        </section>
     );
}
 
export default Section2;