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
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <Card className="h-[calc(100vh)] w-full  max-w-[20rem] p-4 shadow-lg bg-gray-600 text-white">
                <div className="mb-2 p-4">
                    <Typography variant="h2" color="blue-gray">
                        <a href="" style={{ fontFamily: "initial" }}>Dashboard</a>
                    </Typography>
                </div>
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to={"/admin/adminprofile"} href="" style={{ fontFamily: "initial", fontWeight: "bold" }}>Profile</Link>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to={"/admin/addproject"} href="" style={{ fontFamily: "initial", fontWeight: "bold" }}>AddProjeact</Link>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to={"/admin/manageproject"} href="" style={{ fontFamily: "initial", fontWeight: "bold" }}>ManageProject</Link>

                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to={"/admin/managestudent"} href="" style={{ fontFamily: "initial", fontWeight: "bold" }}>ManageStudent</Link>
                        <ListItemSuffix>
                            {/* <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" /> */}
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to={"/user/home"} href="" style={{fontFamily:"initial", fontWeight:"bold"}}>Log Out</Link>
                    </ListItem>
                </List>
            </Card>
        </div>
    )
}

export default SideBar