import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDonateCards from "./ShowDonateCards";


const DonationDetails = () => {
    const { id } = useParams();
    const [ donation, setDonation ] = useState( {} ) || {};
    const donates = useLoaderData();
    console.log( donates );



    useEffect( () => {
        if ( Array.isArray( donates ) ) {
            const selectDonation = donates.find( ( donate ) => donate.id == id );
            setDonation( selectDonation );
        }
    }, [ id, donates, setDonation ] )
    console.log( donation );

    return (

        <div>
            {
                <ShowDonateCards donation={ donation }></ShowDonateCards>
            }
        </div>
    );
};


export default DonationDetails;