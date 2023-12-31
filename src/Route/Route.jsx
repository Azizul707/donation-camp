import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/Donation/DonationDetails";
import Error from "../Component/Error/Error";


const router = createBrowserRouter( [ {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
           
            
        },
        {
            path: '/donation/:id',
            loader: () => fetch( '/donation.json' ),
            element:<DonationDetails></DonationDetails>
        },
        {
            path: '/donations',
            element: <Donation></Donation>
            
        },
        {
            path: '/statistics',
            element:<Statistics></Statistics>
        },
        {
            path: '*',
            element:<Error></Error>
        }
    ]
} ] )

export default router;