import Question from "./Question";

const Faq=()=>{


    

    const faq=[
        {
            id:1,
            title:"Do you offer loans?"
        },
        {
            id:2,
            title:"What are capital gains on property purchase?"
        },
        {
            id:3,
            title:"What type of property are listed on your website?"
        }
    ];

    return(
        <>
        <section className="flex justify-center items-center p-4 ">
           <div className="flex flex-col justify-between items-center max-w-[1000px] w-full md:flex-row">
           <div className="bg-black p-8 text-[var(--primarycolortext)] flex flex-col gap-8 ">
                <h2 className="text-3xl">FAQS</h2>
                <div className="text-3xl">
                <h3>Frequently asked</h3>
                <h3>questions</h3>
                </div>
                <div className="flex flex-col gap-4">
                <p className="text-[var(--secondarytext)] text-sm font-thin">Have question you want answer to?</p>
                <button className="text-[var(--primarycolortext)] bg-[var(--primarycolor)] font-thin text-sm px-4 py-2">see more</button>
                </div>
            </div>
            <div className="text-[var(--primarycolortext)] flex flex-col gap-4  mt-4 max-w-[320px] sm:max-w-[600px]">
              {faq.map((item)=>(

                  <Question title={item.title} key={item.id}/>

              ))}
                
            </div>
           </div>
        </section>
        </>
    )

}

export default Faq;