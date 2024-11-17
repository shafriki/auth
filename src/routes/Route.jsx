import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainL from "../layouts/MainL";
import Google from "../pages/Google";

const Route = createBrowserRouter([
        {
            path: '/',
            element:<MainL></MainL>,
            children: [
                {
                    path: '/',
                    element:<Home></Home>,
                },
                {
                    path: '/google',
                    element:<Google></Google>
                },
            ]
        }
]);

export default Route;