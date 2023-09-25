/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ShowDonateCards = ( { donation } ) => {
    
    const { picture, title,textColor, price, description } = donation;
    
    const handleDonationAdd = () => {
        
        const makeDonation = localStorage.setItem( 'donation' );
      
    }


    return (
        <div className="max-w-6xl mx-auto">
            <div className=" mx-auto relative">
                <img className="w-full h-[90vh]" src={ picture } alt="" />
                <div className="w-full bg-black opacity-80 h-20 absolute bottom-0 left-0">
                    <div className="pt-5 pl-14">
                        <Link>
                        <button onClick={handleDonationAdd} style={{background:textColor}} className="text-white font-semibold p-2 rounded">Donate ${ price }</button> 
                        </Link>
                       
                    </div>
                </div>
                
                
            </div>
            <div className=" mx-auto">
            <div className=" text-xl font-bold pt-10">
                    <h3>{ title }</h3></div>
                    <div className="pt-10">
                    <h3 style={{}}>{ description }</h3></div>
            </div>
            
            
    
        </div>  
    );
}

export default ShowDonateCards;