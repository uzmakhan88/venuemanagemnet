import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import { MediaGroup, Media, MediaText, Image, Icon, CustomDropdownToggle, CustomDropdownMenu, LinkList, LinkListItem } from "../../components";
import { toInitials } from "../../utilities";

// user table column
export const venueColumns = [

    {
        name: "Venue Name",
        grow: 2,
        selector: (row) => row.name,
        cell: (row) => (
            <span>{row.name}</span>
        ),
        sortable: true,
    },
    {
        name: "Venue Type",
        selector: (row) => row.type,
        cell: (row) => (
            <span>{row.type}</span>
        ),
        sortable: true,
        hide: "md",
    },
    {
        name: "Company	",
        selector: (row) => row.company,
        cell: (row) => (
            <span>{row.company}</span>
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
                                    <Icon name="edit"></Icon><span>Edit</span>
                                </LinkListItem>
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
const venues = [
    {
        name: "Ven167",
        type: "Hyderabad",
        company: "Siva",
        sdate: "24-02-2023",
        edate: "23-02-2024",
    },
    {
        name: "Ven168",
        type: "Hyderabad",
        company: "VM Pvt. Ltd",
        sdate: "24-02-2023",
        edate: "23-02-2024",
    },
    {
        name: "Ven169",
        type: "Hyderabad",
        company: "Alnkrita",
        sdate: "24-02-2023",
        edate: "23-02-2024",
    },
];

export default venues;
