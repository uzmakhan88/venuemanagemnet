import React from 'react'
import Nav from 'react-bootstrap/nav'

function Footer() {
  return (
    <div className="nk-footer">
        <div className="container-fluid">
            <div className="nk-footer-wrap">
                <div className="nk-footer-copyright"> 
                    &copy; 2023 Venue Management.
                </div>
                <div className="nk-footer-links">
                  <Nav as="ul" className="nav-sm">
                      {/* <Nav.Item as="li">
                          <Nav.Link href="#link">About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                          <Nav.Link href="#link">Support</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                          <Nav.Link href="#link">Blog</Nav.Link>
                      </Nav.Item> */}
                  </Nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer