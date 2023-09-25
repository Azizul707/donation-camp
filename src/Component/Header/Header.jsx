import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


const Header = () => {
    return (
        
        <div>
            <div className="sm:flex md:flex justify-between items-center max-w-screen-xl mx-auto">
                <div className="z-10">
                    <Logo></Logo>
                </div>
                <div className="z-20">
                    <nav className="">
                        <ul className="text-xl font-semibold flex pr-7 md:flex gap-5">
                            <li ><NavLink to='/' className={ ( { isActive, isPending } ) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>Home</NavLink></li>
                            <li><NavLink to='/donations' className={ ( { isActive, isPending } ) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>Donation</NavLink></li>
                            <li><NavLink to='/statistics' className={ ( { isActive, isPending } ) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>Statistics</NavLink></li>
                        </ul>

                    </nav>
                </div>
            </div>
        </div>

    );
};

export default Header;