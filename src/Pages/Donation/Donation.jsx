import { useEffect, useState } from "react";

const Donation = () => {

    const [ getDonation, setGetdonation ] = useState( [] );
    useEffect( () => {
        const makeDonation = JSON.parse( localStorage.getItem( 'donation' ) );
        setGetdonation( makeDonation );
       
    }, [] );
    
    
    return (
        <div>
            <p>donation</p>
        </div>
    );
};

export default Donation;