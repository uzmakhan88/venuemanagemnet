import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import { MediaGroup, Media, MediaText, Image, Icon, CustomDropdownToggle, CustomDropdownMenu, LinkList, LinkListItem } from "../../components";
import { toInitials } from "../../utilities";

// user table column
export const packageColumns = [
    {
        name: "package",
        grow: 2,
        selector: (row) => row.name,
        cell: (row) => (
            <span>{row.name}</span>
        ),
        sortable: true,
    },
    {
        name: "halls",
        selector: (row) => row.hall,
        cell: (row) => (
            <span>{row.hall}</span>
        ),
        sortable: true,
        hide: "md",
    },
    {
        name: "software model",
        selector: (row) => row.software,
        cell: (row) => (
            <span>{row.software}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "access",
        selector: (row) => row.access,
        cell: (row) => (
            <span>{row.access}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "amount",
        selector: (row) => row.amount,
        cell: (row) => (
            <span>Rs. {row.amount}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "date",
        selector: (row) => row.date,
        cell: (row) => (
            <span>{row.date}</span>
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
                                <LinkListItem to={"/packages"}>
                                    <Icon name="edit"></Icon><span>Edit</span>
                                </LinkListItem>
                                <LinkListItem to={"/packages"}>
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

const packages = [
    {
        name: 'Gold',
        hall: '7 Halls',
        software: 'Booking',
        access: 'Access',
        amount: '8000',
        date: '23-02-2023',
    },
    {
        name: 'Silver',
        hall: '4 Halls',
        software: 'Booking',
        access: 'Access',
        amount: '6000',
        date: '23-02-2023',
    },
    {
        name: 'Bronze',
        hall: '2 Halls',
        software: 'Booking',
        access: 'Access',
        amount: '4000',
        date: '23-02-2023',
    },
    
];

export default packages;
