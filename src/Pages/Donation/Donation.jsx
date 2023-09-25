import { useEffect, useState } from "react";
import DisplayDonation from "./DisplayDonation";

const Donation = () => {

    const [ getDonation, setGetdonation ] = useState( [] );
    useEffect( () => {
        const makeDonation = JSON.parse( localStorage.getItem( 'donation' ) );
        setGetdonation( makeDonation );
       
    }, [] );
    
    
    return (
        <div className="md:grid grid-cols-2 gap-5">
            {
                getDonation?.map(donations => <DisplayDonation key={donations.id} donations={donations}></DisplayDonation>)
           }
        </div>
    );
};

export default Donation;