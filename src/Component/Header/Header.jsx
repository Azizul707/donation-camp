import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


const Header = () => {
    return (
        
        <div className="block bg-auto bg-no-repeat bg-center bg-[url('https://s3-alpha-sig.figma.com/img/c4ab/8133/fc1f79e18cdc1a12320b9b10ec3e253d?Expires=1696204800&Signature=O7exk18LGIB3-nb5tuOMJUqqfblZxg0hMl7Q1nVYajmV9pi3mhvl8ppNTHUnd3wZYKhaDDkP6jFztXhwyY2pPr64e1q8PTYiB54Felq9nkZhUqRc3VJ2IgzqyHNqPAJU5ySU1JTd8-rzuyDq5J5k6MrKn5ZqmvF4IsL-UyUC1cTTLkpxuZgAsD3DO4E903UMsMCq-E7wlseM16TKe0jZo7MrFFzbfGf9FFuzJL8F6PlhV~LbREqim2soo6lvkaJgTT6SLjfTy06ORtz9FyDiHMVAcSg4AsRKlQA6bYM4h37ypzwyP~Lj0x4RONYfm3VLqtg1g7rZ2R2hVF2WH630Eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
            <div className=" md: absolute top-0 left-0 w-full h-[81vh] bg-slate-50 opacity-95 z-0">
                <span className="flex justify-center items-center h-[80vh]">
                    <input className="bg-white border-2 border-gray-700 w-[70vh] h-10 p-2 rounded-l-md" type="text" placeholder="Search here" />
                    <button className="bg-[#FF444A] text-white h-10 px-4 rounded-r-md">Search</button>
                </span>

            </div>
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
                            <li><NavLink to='/donation' className={ ( { isActive, isPending } ) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>Donation</NavLink></li>
                            <li><NavLink to='/statistics' className={ ( { isActive, isPending } ) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>Statistics</NavLink></li>
                        </ul>

                    </nav>
                </div>
            </div>
            <div className="h-[70vh]">
            </div>
        </div>

    );
};

export default Header;