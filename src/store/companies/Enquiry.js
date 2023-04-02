import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import { MediaGroup, Media, MediaText, Image, Icon, CustomDropdownToggle, CustomDropdownMenu, LinkList, LinkListItem } from "../../components";
import { toInitials } from "../../utilities";

// user table column
export const enquiryColumns = [

    {
        name: "Enquiry",
        grow: 2,
        selector: (row) => row.name,
        cell: (row) => (
            <span>{row.name}</span>
        ),
        sortable: true,
    },
    {
        name: "Company",
        selector: (row) => row.company,
        cell: (row) => (
            <span>{row.company}</span>
        ),
        sortable: true,
        hide: "md",
    },
    {
        name: "Email",
        selector: (row) => row.email,
        cell: (row) => (
            <span>{row.email}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "Mobile	",
        selector: (row) => row.mobile,
        cell: (row) => (
            <span>{row.mobile}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "Message",
        selector: (row) => row.message,
        cell: (row) => (
            <span>{row.message}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "Date",
        selector: (row) => row.date,
        cell: (row) => (
            <span>{row.date}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "status",
        selector: (row) => row.status,
        cell: (row) => (
            <span className={`badge text-bg-${
                row.status === "Completed" ? "success-soft"
                : row.status === "Pending" ? "secondary-soft" 
                : "primary-soft"}`
            }>
            {row.status ? row.status : 'General'}
            </span>
        ),
        sortable: true,
    },
    {
        name: "action",
        cell: (row) => (
            <div className="text-end w-100">
                <Dropdown>
                    <Dropdown.Toggle size="sm" as={CustomDropdownToggle} className="btn btn-sm btn-icon btn-zoom me-n1">
                        <Icon name="more-v"></Icon>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-sm" as={CustomDropdownMenu} align="end">
                        <div className="dropdown-content py-1">
                            <LinkList className="link-list-hover-bg-primary link-list-md">
                                <LinkListItem to={`/venues`}>
                                    <Icon name="trash"></Icon><span>Delete</span>
                                </LinkListItem>
                            </LinkList>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        ),
        sortable: false,
        hide: "md",
    },
    
];

// users data
const enquiries = [
    {
        name: "Username",
        company: "Siva",
        email: "Demomail@gmail.com",
        mobile: "9988990099",
        date: "24-02-2023",
        message: "this is message",
        status:"Completed",
    },
    {
        name: "Usernam2",
        company: "Siva",
        email: "Demomail@gmail.com",
        mobile: "9988990099",
        date: "24-02-2023",
        message: "this is message",
        status:"Pending",
    },
    {
        name: "Usernam3",
        company: "Siva",
        email: "Demomail@gmail.com",
        mobile: "9988990099",
        date: "24-02-2023",
        message: "this is message",
        status:"Completed",
    },
];

export default enquiries;
