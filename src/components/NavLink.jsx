"use client";
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import classNames from "@/utils/classNames";

const NavLink = ({children, href, exact = false, activeClassName, ...props}) => {
    const path = usePathname();
    const active = exact ? path === href : path.startsWith(href);
    const classes = classNames(props.className, active && activeClassName);
    
    if (classes) {
        props.className = classes;
    }
    
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;