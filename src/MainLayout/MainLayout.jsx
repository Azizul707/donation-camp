import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-2">
            <Header></Header>
            <div className="py-10">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;