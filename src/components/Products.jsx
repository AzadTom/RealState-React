import ProductCard from "./ProductCard";

const Products = ()=>{


    const products=[
        {
            id:1,
            heroImg:"https://images.unsplash.com/photo-1472148083604-64f1084980b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Banana lsland, Lagos",
            bed:"6 bed",
            dimension:"15 by 15",
            price:"10M"
        },
        {
            id:2,
            heroImg:"https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Parkview Estate, Lagos",
            bed:"3 bed",
            dimension:"15 by 10",
            price:"20M"
        },
        {
            id:3,
            heroImg:"https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
            title:"Eko Atlantic Estate, Lagos",
            bed:"2 bed",
            dimension:"17 by 20",
            price:"12M"
        },
        {
            id:4,
            heroImg:"https://images.unsplash.com/photo-1472148083604-64f1084980b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Banana lsland, Lagos",
            bed:"6 bed",
            dimension:"15 by 15",
            price:"10M"
        },
        {
            id:5,
            heroImg:"https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Parkview Estate, Lagos",
            bed:"3 bed",
            dimension:"15 by 10",
            price:"20M"
        },
        {
            id:6,
            heroImg:"https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
            title:"Eko Atlantic Estate, Lagos",
            bed:"2 bed",
            dimension:"17 by 20",
            price:"12M"
        }
    ];



   

    return(
        <>
        <div className="flex  justify-between   mx-8 my-8">
            <h2 className="text-2xl font-semibold">Our Popular Properties</h2>
            <h1 className="hidden sm:flex  items-center gap-4"><span>Explore All</span> <span><img src="/Line.svg" alt="arrow" /></span></h1>
        </div>
        <section className="flex flex-col gap-4 justify-center items-center p-4">
         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 justify-between   items-center max-w-[1000px]">
         {products.map((item)=>(

            <ProductCard {...item} key={item.id}/>
           
           
            ))}
         </div>

        </section>
        
        </>
    )

}

export default Products;