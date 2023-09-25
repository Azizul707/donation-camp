import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDonateCards from "./ShowDonateCards";



const Donation = () => {
    const { id } = useParams();
    const [ donation, setDonation ] = useState( {} );
    const donates = useLoaderData();



    useEffect( () => {
        console.log( id );
        const selectDonation = donates.find( donate => donate.id == id )
        setDonation( selectDonation );
    }, [ id, donates ] )







    return (
        <div>
            <ShowDonateCards donation={ donation }></ShowDonateCards>
        </div>
    );
};

export default Donation;