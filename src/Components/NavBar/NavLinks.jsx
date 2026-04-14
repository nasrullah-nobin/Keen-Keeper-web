import Link from 'next/link';
import React from 'react';

const NavLinks = ({href,children,className}) => {
    
    
    return (
       <Link className={className} href={href}>{children}</Link>
    );
};

export default NavLinks;