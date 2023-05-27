import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import NetworkIcon from "@mui/icons-material/SupervisorAccount";
import JobsIcon from "@mui/icons-material/Work";
import MessagingIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useTheme } from "@emotion/react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import NavItem from "./navItem";
const StyledIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
}));

function Navbar() {
    const theme = useTheme();

    const navLinks = [
        {
            title: "home",
            icon: <HomeIcon />,
            link: "/",
        },
        {
            title: "my network",
            icon: <NetworkIcon />,
            link: "/mynetwork",
        },
        {
            title: "jobs",
            icon: <JobsIcon />,
            link: "/jobs",
        },
        {
            title: "messaging",
            icon: <MessagingIcon />,
            link: "/messaging",
        },
        {
            title: "Notifications",
            icon: <NotificationsIcon />,
            link: "/notifications",
        },
    ];

    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <StyledIconButton edge="start" color="inherit">
                    <LinkedInIcon />
                </StyledIconButton>
                <Typography variant="h6" component="h1" color="inherit" noWrap>
                    LinkedIn
                </Typography>
                {navLinks.map((navLink, index) => (
                    <NavItem
                        key={index}
                        title={navLink.title}
                        href={navLink.link}
                        icon={navLink.icon}
                    />
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
