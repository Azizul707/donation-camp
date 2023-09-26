import { useEffect, useState } from "react";
import DisplayDonation from "./DisplayDonation";

const Donation = () => {

    const [ getDonation, setGetdonation ] = useState( [] );
    const [ showMore, setShowMore ] = useState( false );
    const [ noFound, setNoFound ] = useState( false );

    useEffect( () => {

        const makeDonation = JSON.parse( localStorage.getItem( 'donation' ) ) || [];
        if ( makeDonation.length ===  0  ) {
            setNoFound('No Donation Has Been Submitted Yet')
        } else {
            setGetdonation( makeDonation );
            
        }





    }, [] );





    return (

        <div> { noFound ?
            ( <p className="h-[50vh] flex justify-center items-center text-2xl font-semibold">{ noFound }</p> )

            :
            <div className="md:grid grid-cols-2 gap-5">
                
                {
                    showMore ? getDonation?.map( ( donations, idx ) => <DisplayDonation key={ idx } donations={ donations }></DisplayDonation> )
                        
                        : getDonation.slice( 0, 4 )?.map( ( donations, idx ) => <DisplayDonation key={ idx } donations={ donations }></DisplayDonation> )
                        
                }
            </div> }
            
            {
                <div className="flex justify-center">
                    {
                       getDonation.length > 4? <button onClick={()=>setShowMore(!showMore)} className=" bg-blue-600 py-2 px-3 my-5 text-white font-semibold">{showMore ?'See Less':'See More'}</button>:''

                    }
               </div> 
            }

        
        </div>
    );
};

export default Donation;