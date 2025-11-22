import React from "react";
import { Outlet } from "react-router-dom";
import { Bar } from "./Bar";



const DashboardLayout = () => {
    return (
        <div className="h-screen bg-blue-200">
        <div className='flex gap-8 flex-col md:flex-row '>
            <Bar/>
            <Outlet/>
        </div>
        </div>
    )
}

export default DashboardLayout