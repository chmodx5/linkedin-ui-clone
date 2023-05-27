import React from "react";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

type Props = {
    title: string;
    href: string;
    icon: React.ReactNode;
};

const NavItem = ({ title, icon, href }: Props) => {
    return (
        <Link component={RouterLink} to={href}>
            {icon}
            {title}
        </Link>
    );
};

export default NavItem;
