import '../App.css';
import Input from './Input';
import Header from './Header';


const Search = ()=>{



    const tabslist = [
        {
            id:1,
            icon: "/location.svg",
            type:"text",
            placeholder:"Location"
        },
        {
            id:2,
            icon:"/property.svg",
            type:"text",
            placeholder:"Property Type"
        },
        {
            id:3,
            icon:"/budget.svg",
            type:"text",
            placeholder:"Budget"
        },
    ];



    return(
        <>
          <Header/>
         <header className='bg-[url("/heroImg.png")]  bg-cover object-cover bg-center h-[60vh] p-4 flex justify-center items-center'>
           {/* main search */}
             <section className="bg-[var(--secondarycolor)] p-4 pb-8 md:pb-16">
                {/* title */}
             <h2 className='mb-8'>Search for available properties</h2>
             {/* tabs-filter */}
             <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2  md:flex md:flex-row">
                {tabslist.map((item)=>(

                    <Input {...item} key={item.id}/>
                ))}
                <button className='bg-[var(--primarycolor)] px-4  py-2 flex-1'>Search now</button>
             </div>
             </section>
         </header>
        </>
    )


}

export default Search;

