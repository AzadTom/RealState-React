import "../App.css";

const Footer =()=>{



    const goToTop=()=>{

        window.scroll({
            top:0,
            behavior:"smooth"
        })

    }

    return(
        <>
        <footer className="bg-black text-white my-4 py-4 px-4 grid  gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 overflow-hidden">
            <div>
                <h2>Our useful links</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 " >
                    <li>PropTechVision</li>
                    <li>EstateExplorer</li>
                    <li>RealtyPulse</li>
                    <li>UrbanShowcase</li>
                    <li>SkylineSampler</li>
                    <li>HomeHarbor</li>
                </ul>
            </div>
            <div>
                <h2>Socials</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 ">
                    <li>ConnectSphere</li>
                    <li>SocialHarbor</li>
                    <li>UnityHub</li>
                    <li>ShareVista</li>
                </ul>
            </div>

            <div>
                <h2>Collabrators</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 ">
                    <li>TeamHarbor</li>
                    <li>CollaboraLink</li>
                    <li>SyncWave</li>
                    <li>CoCreateHub</li>
                    <li>CollaborateSync</li>
                    <li>UnityNexus</li>
                    <li>ConnectCollab</li>
                </ul>
            </div>

            <div>
                <h2>Properties</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 ">
                    <li>RuralRetreatSampler</li>
                    <li>SkyHighResidencesDemo</li>
                    <li>MountainViewSampler</li>
                    <li>CoastalRetreatsHub</li>
                    <li>UrbanLoftsDemo</li>
                </ul>
            </div>

            <div>
                <h2>AboutUs</h2>
                <ul className="text-[var(--secondarytext)] text-sm font-thin flex flex-col gap-4 ">
                    <li>UrbanVistaOrigins</li>
                    <li>PrimePropertiesPioneers</li>
                    <li>HarmonyHomesStory</li>
                    <li>VisionaryEstates</li>
                </ul>
            </div>
        </footer>
        <div className="flex justify-center items-center w-full">
       <span className="text-2xl cursor-pointer" onClick={()=> goToTop()}>&#128897;</span>
        </div>
        </>
    )

}

export default Footer;
