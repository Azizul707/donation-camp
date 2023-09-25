import { useEffect, useState } from "react";
import DonateCard from "./DonateCard/DonateCard";

const Home = () => {
    
    const [ donates, setDonates ] = useState([]);

    useEffect( () => {
        fetch( '/donation.json' )
            .then( res => res.json() )
            .then( data => setDonates( data ) )
    }, [] );
   
   
   
    return (
        <div className="sm:grid-cols-1 justify-center items-center content-center  md:grid grid-cols-2 gap-4 lg:grid-cols-4">
            {
                donates?.map(donate => <DonateCard key={donate.id} donate={donate}></DonateCard>)
            }            
        </div>
    );
};

export default Home;