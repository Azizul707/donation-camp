import { useEffect, useState } from "react";
import DisplayDonation from "./DisplayDonation";

const Donation = () => {

    const [ getDonation, setGetdonation ] = useState( [] );
    const [ showMore, setShowMore ] = useState( false );
    useEffect( () => {
        const makeDonation = JSON.parse( localStorage.getItem( 'donation' ) ) || [];
        setGetdonation( makeDonation );
       
    }, [] );
    console.log(getDonation);

    
    
    
    return (
        
        <div className="">
            <div className=" md:grid grid-cols-2 gap-5">
            {
                    showMore ? getDonation?.map( donations => <DisplayDonation key={ donations.id } donations={ donations }></DisplayDonation> ) :getDonation?.slice(0,4).map( donations => <DisplayDonation key={ donations.id } donations={ donations }></DisplayDonation> )
                        
           }
            </div>
            {!showMore && <div onClick={ () => setShowMore( !showMore ) } className="p-5 flex justify-center"><button className="bg-blue-500 text-white py-2 px-3 font-semibold">{showMore?'See Less':'See More' }</button></div> }
            
        </div>
    );
};

export default Donation;