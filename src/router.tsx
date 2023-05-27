import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Feed from "./pages/feed";
import Jobs from "./pages/jobs";
import Messaging from "./pages/messaging";
import MyNetwork from "./pages/myNetwork";
import Notifications from "./pages/notifications";
import Profile from "./pages/profile";

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Feed />,
            },
            {
                path: "jobs",
                element: <Jobs />,
            },
            {
                path: "messaging",
                element: <Messaging />,
            },
            {
                path: "mynetwork",
                element: <MyNetwork />,
            },
            {
                path: "notifications",
                element: <Notifications />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
]);

export default router;
