import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import LeftSidebar from "../components/left-sidebar";
import RightSidebar from "../components/right-sidebar";
import { Container, Grid } from "@mui/material";
const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Grid container spacing={2}>
                    <Grid
                        item
                        lg={3}
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                            },
                        }}
                    >
                        <LeftSidebar />
                    </Grid>
                    <Grid item xs={12} md={9} lg={6}>
                        <Outlet />
                    </Grid>
                    <Grid
                        item
                        md={3}
                        sx={{
                            display: {
                                xs: "none",
                                lg: "block",
                            },
                        }}
                    >
                        <RightSidebar />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MainLayout;
