
const Header=()=>{



    return(
        <>
        <div className="flex justify-between m-4 items-center  ">
            <div>
                <img src="/LuxeNest.svg" alt="logo" />
            </div>
           
                <ul className="gap-4 hidden sm:flex sm:gap-8 text-sm font-extralight">
                    <li className="font-semibold">Home</li>
                    <li>AboutUs</li>
                    <li>Properties</li>
                    <li>Agents</li>
                </ul>
             
            <div>
                <button className="border border-white px-4 py-2 ">Find A House</button>
            </div>
        </div>
        </>
    )

}

export default  Header;