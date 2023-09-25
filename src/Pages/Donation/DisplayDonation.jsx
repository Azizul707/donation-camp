/* eslint-disable react/prop-types */


const DisplayDonation = ( { donations } ) => {
    const { picture, title, textColor, price, category, categoryColorBg, cardColorBg } = donations;
    return (
        <div>
            <div style={ { background: cardColorBg } } className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={ picture }
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
                        <span className="p-2" style={ { background: categoryColorBg, color: textColor } }>{ category }</span>
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
                        { title }
                    </h4>
                    <p style={ { color: textColor } } className="text-xl font-semibold pb-3">
                        ${ price }.00
                    </p>

                    <a className="inline-block" href="#">
                        <button style={ { background: textColor } }
                            className="flex select-none items-center gap-2 rounded py-2 px-3 text-center align-middle font-sans text-xl  text-white "
                            type="button"
                        >
                            View Details

                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default DisplayDonation;