import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDonateCards from "./ShowDonateCards";


const DonationDetails = () => {
    const { id } = useParams();
    const [ donation, setDonation ] = useState( {} );
    const donates = useLoaderData();



    useEffect( () => {
        
        const selectDonation = donates.find( donate => donate.id == id )
        setDonation( selectDonation );
    }, [ id, donates ] )

    return (
        <div>
            <ShowDonateCards donation={ donation }></ShowDonateCards>
        </div>
    );
};
    

export default DonationDetails;