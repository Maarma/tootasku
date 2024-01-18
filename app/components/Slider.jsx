"use client"

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider= () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 3 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 3 ? 0 : prevIndex + 1));
    };

    const items = [
    {
      image: "/HMMsein.png",
      title: "Värvimistööd 1",
      description: "Elutoa värvimistööd ja elektri paigaldus 1."
    },
    {
      image: "/Thor.png",
      title: "Kuuri remont",
      description: "Puudekuuri"
    },
    {
      image: "/Lumerookimine.png",
      title: "Lume rookimine suve perioodil",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum."
    },
    {
      image: "/HMMsein.png",
      title: "Värvimistööd 1",
      description: "Elutoa värvimistööd ja elektri paigaldus 1."
    },
    {
      image: "/Thor.png",
      title: "Kuuri remont",
      description: "Puudekuuri"
    },
  ];

    return ( 
        <div className="flex justify-center flex-col pb-16 mx-auto w-[80%]">
            <div className="flex flex-col gap-2">
                <p>Leia omale tööamps</p>
                <div className='flex justify-between'>
                    <h1 className="font-bold text-5xl">Viimati lisatud kuulutused</h1>
                    <div className="flex">
                        <IoIosArrowBack className="text-4xl hover:cursor-pointer" onClick={handlePrevClick}/>
                        <IoIosArrowForward  className="text-4xl bg-[var(--black)] rounded-full text-[var(--white)] text-center hover:cursor-pointer" onClick={handleNextClick}/>
                    </div>
                </div>
            </div>
            <ul className='pt-12 pb-8 flex justify-center gap-6'>
                {[0, 1, 2].map((i) => {
                const index = (currentIndex + i) % items.length;
                return (
                    <li key={index} className='border-[1px] border-solid rounded-xl w-[27rem] h-[27rem]'>
                      <Link href="/kuulutus">
                        <Image src={items[index].image} width={500} height={500}></Image>
                        <div className='pt-6 px-4'>
                            <h2 className='font-bold text-xl pb-4'>{items[index].title}</h2>
                            <p>{items[index].description}</p>
                        </div>
                      </Link>
                    </li>
                );
                })}
            </ul>
            <Link className="self-center mx-12 text-bold text-center rounded-full px-8 py-4 w-[15rem] text-[var(--white)] bg-[var(--orange)]" href="/kuulutused">KÕIK KUULUTUSED</Link>
        </div>
     );
}
 
export default Slider;