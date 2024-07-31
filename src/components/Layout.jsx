import React from 'react';
import StickyNavbar from './StickyNavbar';
import FooterWithLinks  from './Footer';


function Layout({children}) {
    return(
        <>
            <StickyNavbar/>
            <div className="content -mt-8 pt-8 bg-astongreen-900 min-h-screen w-screen">
            {children}
            </div>
            <FooterWithLinks/>
        </>
    );
}

export default Layout;