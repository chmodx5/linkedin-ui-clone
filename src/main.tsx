import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
