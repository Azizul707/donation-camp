/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonateCard = ( { donate } ) => {
    const { id, picture, title, cardColorBg, category, categoryColorBg, textColor } = donate;
    return (
        <div>
            <Link to={`donation/${id}`}>
            <div style={ { background: cardColorBg } } className="relative flex w-[370px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={ picture }
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p style={ { color: textColor, background: categoryColorBg } } className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased p-2 rounded">
                            { category }
                        </p>
                    </div>
                    <p style={ { color: textColor } } className="block font-sans leading-normal text-gray-700 antialiased opacity-75 text-xl font-semibold">
                        { title }
                    </p>
                </div>
            </div>
            </Link>
            
        </div>
    );
};

export default DonateCard;