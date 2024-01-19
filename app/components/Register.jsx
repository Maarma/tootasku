'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from 'react'



const Rergister = () => {
    const [option, setOption] = React.useState("male");

    return ( 
        <div className="flex justify-center pb-12">
            <div>
                <h1 className="flex font-bold text-3xl py-2 justify-center">Registreeri konto</h1>
                <div className="flex items-center justify-center gap-12 flex-col py-16">
                    <div className="py-4 pb-48">
                        <label className="px-10">
                        Oman LHV ettevõtluskontot <input type="checkbox" checked={option === "lhv"}
                        onChange={() => setOption("lhv")} name="lhv" className="h-[25px] w-[25px]"/>
                        </label>
                        <label className="px-10">
                        Registreeri ettevõte <input type="checkbox" checked={option === "firma"}
                        onChange={() => setOption("firma")} name="firma" className="h-[25px] w-[25px]"/>
                        </label>
                        <label className="px-10">
                        Registreeri kliendiks <input type="checkbox" checked={option === "era"}
                        onChange={() => setOption("era")} name="era" className="h-[25px] w-[25px]"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
     );
};

export default Rergister;