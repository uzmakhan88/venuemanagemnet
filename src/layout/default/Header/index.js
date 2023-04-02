import { useState } from 'react';
import classNames from 'classnames';
import { Dropdown, Button, Offcanvas, Alert } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

import { Logo, Image, Icon, MediaAction, MediaGroup, MediaText, Media, LinkList, LinkListItem, CustomDropdownToggle, CustomDropdownMenu, Schedule } from '../../../components';

import Menu from './Menu'

import ToggleSidebar from '../Toggle/Sidebar'
import ToggleNavbar from '../Toggle/Navbar'

import { useLayout, useLayoutUpdate } from './../LayoutProvider'

function QuickNav({className,...props}) {
    const compClass = classNames({
        "nk-quick-nav": true,
        [className]: className,
    })
  return (
    <ul className={compClass}>{props.children}</ul>
  )
}

function QuickNavItem({className, ...props}) {
    const compClass = classNames({
        "d-inline-flex": true,
        [className]: className,
    })
  return (
    <li className={compClass}>{props.children}</li>
  )
}

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const layout = useLayout();
  const layoutUpdate = useLayoutUpdate();

  const compClass = classNames({
    "nk-header nk-header-fixed": true,
    [`is-${layout.headerVariant}`]: layout.headerVariant,
  });

  const navClass = classNames({
    "nk-header-menu nk-navbar": true,
    "navbar-active": layout.headerActive,
    // eslint-disable-next-line
    "navbar-mobile": layout.headerTransition || eval(`layout.breaks.${layout.headerCollapse}`) > window.innerWidth,
  });

  // offcanvas
  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <>
        <div className={compClass}>
            <div className="container-fluid">
                <div className="nk-header-wrap">
                <div className="nk-header-logo">
                    <ToggleSidebar variant="zoom" icon='menu' />
                    {/* <ToggleNavbar className="me-2" /> */}
                    <Logo />
                </div>
                {layout.headerActive && <div className="navbar-overlay" onClick={layoutUpdate.headerMobile}></div>}
                <nav className={navClass}>
                    {/* <Menu /> */}
                </nav>
                <div className="nk-header-tools">
                    <QuickNav>
                        <Dropdown as={QuickNavItem}>
                            <Dropdown.Toggle variant="zoom" size="sm" bsPrefix className="btn-icon d-sm-none">
                                <Icon name="search"></Icon>
                            </Dropdown.Toggle>
                            <Dropdown.Toggle variant="zoom" size="md" bsPrefix className="btn-icon d-none d-sm-inline-flex">
                                <Icon name="search"></Icon>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-lg"> 
                                <div className="dropdown-content dropdown-content-x-lg py-1">
                                    <div className="search-inline">
                                        <div className="form-control-wrap flex-grow-1">
                                            <input placeholder="Search Here..." type="text" className="form-control-plaintext" />
                                        </div>
                                        <Icon name="search" size="sm"></Icon>
                                    </div>
                                </div>
                                <Dropdown.Divider className="m-0"></Dropdown.Divider>
                                <div className="dropdown-content dropdown-content-x-lg py-3">
                                    <div className="dropdown-title pb-2">
                                        <h5 className="title">Recent searches</h5>
                                    </div>
                                    <ul className="dropdown-list gap gy-2">
                                        <li>
                                            <MediaGroup>
                                                <Media size="md" shape="circle" variant="light"><Icon name="clock"></Icon></Media>
                                                <MediaText>
                                                    <div className="lead-text">Premium Package</div>
                                                    <span className="sub-text">1 days ago</span>
                                                </MediaText>
                                                <MediaAction end>
                                                    <Button size="md" variant="zoom" className="btn-icon me-n1"><Icon name="trash"></Icon></Button>
                                                </MediaAction>
                                            </MediaGroup>
                                        </li>
                                        <li>
                                            <MediaGroup>
                                                <Media size="md" shape="circle" variant="light"><Icon name="clock"></Icon></Media>
                                                <MediaText>
                                                    <div className="lead-text">Economy Package</div>
                                                    <span className="sub-text">07 Aug</span>
                                                </MediaText>
                                                <MediaAction end>
                                                    <Button size="md" variant="zoom" className="btn-icon me-n1"><Icon name="trash"></Icon></Button>
                                                </MediaAction>
                                            </MediaGroup>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <QuickNavItem>
                            <button className="btn-icon btn btn-zoom btn-md d-inline-flex" onClick={handleOffcanvasShow}>
                                <Icon name="moon-fill"></Icon>
                            </button>
                        </QuickNavItem>
                        <Dropdown as={QuickNavItem}>
                            <Dropdown.Toggle bsPrefix as={CustomDropdownToggle}>
                                
                                <div className="d-inline-flex d-sm-none">
                                    <Media shape="circle" size="md">
                                        <Image src='/images/avatar/c.jpg' staticImage thumbnail/>
                                    </Media>
                                </div>
                                <div className="d-none d-sm-flex">
                                    <Media shape="circle">
                                        <Image src='/images/avatar/c.jpg' staticImage thumbnail/>
                                    </Media>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-md" as={CustomDropdownMenu}> 
                                <div className="dropdown-content dropdown-content-x-lg py-3 border-bottom border-light">
                                    <MediaGroup>
                                        <Media size="xl" shape="circle">
                                            <Image src='/images/avatar/c.jpg' staticImage thumbnail/>
                                        </Media>
                                        <MediaText>
                                            <div className="lead-text">Superadmin</div>
                                            <span className="sub-text">Owner &amp; Founder</span>
                                        </MediaText>
                                    </MediaGroup>
                                </div>
                                <div className="dropdown-content dropdown-content-x-lg py-3">
                                    <LinkList>
                                        <LinkListItem to="/auths/auth-login"><Icon name="signout"></Icon><span>Log Out</span></LinkListItem>
                                    </LinkList>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </QuickNav>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header