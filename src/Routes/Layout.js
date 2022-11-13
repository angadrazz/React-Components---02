import React,{Fragment} from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({children}) {
    return (
        <>
            <NavBar />
            {children}
            <Footer/>
        </>
    );
}

export default Layout;