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
        <div className=" mt-28 grid md:grid grid-cols-4 gap-4">
            {
                donates?.map(donate => <DonateCard key={donate.id} donate={donate}></DonateCard>)
            }            
        </div>
    );
};

export default Home;