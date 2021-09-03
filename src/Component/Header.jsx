import React,{useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';



function Header() {

        const [collapsed, setCollapsed] = useState(true);
      
        const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Container>
              <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/add">Add</NavLink>
                    </NavItem>

                  </Nav>
                </Collapse>
              </Navbar>
            </Container>  
        </div>
    )
}

export default Header
