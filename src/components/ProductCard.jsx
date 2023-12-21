
// eslint-disable-next-line react/prop-types
const ProductCard = ({id,heroImg,title,bed,dimension,price})=>{


    return(
        <>
         <div>
            
            <div>
            <img src={heroImg} alt="demo"  id={id} className="w-full bg-center bg-cover object-cover"/>
            </div>
            <div className="px-4 py-2 bg-[var(--secondarycolor)] flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <img src="/location.svg" alt="icon" />
                    <h2>{title}</h2>
                </div>
                <div className="flex gap-3 ">
                    
                    <div className="flex gap-2 items-center">
                    <img src="bed.svg" alt="icon" />
                    <span>{bed}</span>
                    </div>


                    <div className="flex gap-2 items-center">
                    <img src="dimension.svg" alt="icon" />
                    <span>{dimension}</span>
                    </div>


                    <div className="flex gap-2 items-center">
                    <img src="price.svg" alt="icon" />
                    <span>{price}</span>
                    </div>
                  
                   
                </div>

                <button className="bg-[var(--primarycolor)] px-4 py-2">Call now</button>

            </div>

         </div>
        </>
    )

}

export default ProductCard;