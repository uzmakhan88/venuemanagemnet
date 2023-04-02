import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import { MediaGroup, Media, MediaText, Image, Icon, CustomDropdownToggle, CustomDropdownMenu, LinkList, LinkListItem } from "../../components";
import { toInitials } from "../../utilities";

// user table column
export const companyColumns = [
    {
        name: "Company",
        grow: 2,
        selector: (row) => row.name,
        cell: (row) => (
            <span>{row.name}</span>
        ),
        sortable: true,
    },
    {
        name: "Venue",
        grow: 2,
        selector: (row) => row.venue,
        cell: (row) => (
            <span>{row.venue}</span>
        ),
        sortable: true,
    },
    {
        name: "City",
        selector: (row) => row.city,
        cell: (row) => (
            <span>{row.city}</span>
        ),
        sortable: true,
        hide: "md",
    },
    {
        name: "Mobile No",
        selector: (row) => row.mobile,
        cell: (row) => (
            <span>{row.mobile}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "Package",
        selector: (row) => row.pkgname,
        cell: (row) => (
            <span>{row.pkgname}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "Subscription Date",
        selector: (row) => row.sdate,
        cell: (row) => (
            <span>{row.sdate}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "Expiry Date",
        selector: (row) => row.edate,
        cell: (row) => (
            <span>{row.edate}</span>
        ),
        sortable: true,
        hide: "lg",
    },
    {
        name: "status",
        selector: (row) => row.status,
        cell: (row) => (
            <span className={`badge text-bg-${
                row.status === "Approved" ? "success-soft"
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
                                <LinkListItem to={`/companies`}>
                                    <Icon name="edit"></Icon><span>Edit</span>
                                </LinkListItem>
                                <LinkListItem to={`/companies`}>
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
const company = [
    {
        name: "VM Pvt. Ltd",
        venue: "Siva",
        city: "Hyderabad",
        mobile: "9988998899",
        pkgname: "Gold",
        sdate: "24-12-2022",
        edate: "24-12-2023",
        status: "Approved",
    },
    {
        name: "VM Pvt. Ltd",
        venue: "Siva",
        city: "Hyderabad",
        mobile: "9988998899",
        pkgname: "Gold",
        sdate: "24-12-2022",
        edate: "24-12-2023",
        status: "Pending",
    },{
        name: "VM Pvt. Ltd",
        venue: "Siva",
        city: "Hyderabad",
        mobile: "9988998899",
        pkgname: "Gold",
        sdate: "24-12-2022",
        edate: "24-12-2023",
        status: "Approved",
    },
    {
        name: "VM Pvt. Ltd",
        venue: "Siva",
        city: "Hyderabad",
        mobile: "9988998899",
        pkgname: "Gold",
        sdate: "24-12-2022",
        edate: "24-12-2023",
        status: "Approved",
    },

];

export default company;
