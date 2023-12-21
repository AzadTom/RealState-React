import ProductCard from "./ProductCard";

const Products = ()=>{


    const products=[
        {
            id:1,
            heroImg:"/demo1.png",
            title:"Banana lsland, Lagos",
            bed:"5 bed",
            dimension:"10 by 10",
            price:"10M"
        },
        {
            id:2,
            heroImg:"/demo2.png",
            title:"Parkview Estate, Lagos",
            bed:"5 bed",
            dimension:"15 by 10",
            price:"20M"
        },
        {
            id:3,
            heroImg:"/demo3.png",
            title:"Eko Atlantic Estate, Lagos",
            bed:"7 bed",
            dimension:"20 by 20",
            price:"25M"
        },
        {
            id:4,
            heroImg:"/demo4.png",
            title:"Banana lsland, Lagos",
            bed:"6 bed",
            dimension:"15 by 15",
            price:"10M"
        },
        {
            id:5,
            heroImg:"/demo5.png",
            title:"Parkview Estate, Lagos",
            bed:"3 bed",
            dimension:"15 by 10",
            price:"20M"
        },
        {
            id:6,
            heroImg:"/demo6.png",
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
            <h1 className="hidden sm:flex  items-center gap-4"><span>Explore All</span> <span><img src="/arrow.svg" alt="arrow" /></span></h1>
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