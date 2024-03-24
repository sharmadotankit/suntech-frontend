import React from 'react';
import SideBar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Company = () => {
    return (
        <div>
            <SideBar>
                <Outlet />
            </SideBar>
        </div>
    );
};

export default Company;