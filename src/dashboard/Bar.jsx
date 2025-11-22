import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox,  HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiHome } from "react-icons/hi";

import userImg from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../contects/Authindex";

export const Bar = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <Sidebar     aria-label="Sidebar with content separator example" className="mt-1 px-1 rounded">
            <Sidebar.Logo href="#" 
            img={userImg} imgAlt="logo">
                {/* BOOKS */}
                <p>
                    {user ?.displayName || "WelCome User"}
                </p>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/home" icon={HiHome}>
                        Home
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Upload Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Manage Books
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="/logout" icon={HiTable}>
                        Log Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}