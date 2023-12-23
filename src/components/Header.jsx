import { useNavigate } from "react-router-dom";

const Header=()=>{


    const navigate = useNavigate();

    return(
        <>
        <div className="flex justify-between p-4 items-center  bg-[var(--neutralblack)]">
            <div>
                <img src="/LuxeNest.svg" alt="logo" />
            </div>
           
                <ul className="gap-4 hidden sm:flex sm:gap-8 text-sm font-extralight">
                    <li className="font-semibold" onClick={()=> navigate("/")}>Home</li>
                    <li onClick={()=> navigate("/about")}>AboutUs</li>
                    <li onClick={()=> navigate("/property")}>Properties</li>
                    <li onClick={()=> navigate("/agents")}>Agents</li>
                </ul>
             
            <div>
                <button className="border border-white px-4 py-2 ">Find A House</button>
            </div>
        </div>
        </>
    )

}

export default  Header;