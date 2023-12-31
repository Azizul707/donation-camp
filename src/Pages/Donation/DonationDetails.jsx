import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDonateCards from "./ShowDonateCards";


const DonationDetails = () => {
    const { id } = useParams();
    const idx = Number( id );
    const [ donation, setDonation ] = useState( {} ) || {};
    const donates = useLoaderData();
   



    useEffect( () => {
        if ( Array.isArray( donates ) ) {
            const selectDonation = donates.find( ( donate ) => donate.id === idx );
            setDonation( selectDonation );
        }
    }, [ idx, donates, setDonation ] )
   

    return (

        <div>
            {
                <ShowDonateCards donation={ donation }></ShowDonateCards>
            }
        </div>
    );
};


export default DonationDetails;