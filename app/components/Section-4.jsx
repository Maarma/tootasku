const Section4 = () => {
    return ( 
        <section className="flex justify-center">
            <div className="w-[86rem] h-[38rem] bg-[url('/Covid-19.png')] bg-no-repeat bg-center rounded-xl">
                <div className="flex mt-48 ml-10 gap-6 flex-col">
                    <h1 className="text-5xl font-bold w-[800px]">Liitu uudiskirjaga</h1>
                    <p className="w-[32rem]">Liitu Töötasku uudiskirjaga ja ole esimene, kes saab omale tööotsa või leia sobivad teenusepakkujad hetkega. </p>
                    <div class="w-[27rem] rounded-full bg-[var(--white)] flex items-center justify-between mt-8">
                        <input type="text" placeholder="Sisesta oma e-kirja aadress" className="bg-transparent focus:outline-none py-4 px-8 w-full"></input> 
                        <button className="py-4 px-8 rounded-full border-l w-56 bg-[var(--black)] text-[var(--white)] items-center">Liitun!</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Section4;