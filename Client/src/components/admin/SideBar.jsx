import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom';
import useUserContext from '../../context/UserContext';

const SideBar = () => {

    const { loggedIn, SignOut } = useUserContext();
    console.log(loggedIn);

    const showLoggedin = () => {
        if (loggedIn) {
            return (
                <div className="px-3 py-2">
                    <div className="container d-flex flex-wrap justify-content-end">
                        <div className="">

                        <div>
                                <Menu as="div" className="relative ml-3 mt-2">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                className="h-8 w-8 rounded-full"
                                            />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <MenuItem>
                                            <Link to={"/admin/adminprofile"} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                Your Profile
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <a onClick={SignOut} className=" cursor-pointer block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                Sign out
                                            </a>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div></div>

            )
        }
    }
    return (
        <div>

            <header>
                <div className="text-bg-dark ">
                    <div className="container py-2">
                        <div className="d-flex justify-between md:justify-between sm:justify-between">
                            <div>
                                <a
                                    href="#"
                                    className="d-flex align-items-center my-lg-0 me-lg-auto text-white text-decoration-none "
                                >
                                    <img src="https://bbdu.ac.in/wp-content/uploads/2020/05/2020-05-12.png" alt="" style={{ height: 40, marginTop: "10px" }} />
                                </a>
                            </div>
                            <div>
                                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                    <li>
                                        <Link to={"/admin/addproject"} href="#" className="nav-link text-white text-xl" style={{ fontFamily: "initial" }}>
                                            <i class="fa-solid fa-book fs-3 me-2 text-white"></i>
                                            Add Project
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/manageproject"} href="#" className="nav-link text-white text-xl" style={{ fontFamily: "initial" }}>
                                            <i class="fa-solid fa-book-open fs-3 me-2 text-white"></i>
                                            Manage Project
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to={"/admin/managestudent"} href="#" className="nav-link text-white text-xl" style={{ fontFamily: "initial" }}>
                                            <i class="bi bi-person-lines-fill fs-3 me-2"></i>
                                            Manage Student
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                           {showLoggedin()}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default SideBar