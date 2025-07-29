import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayOut;