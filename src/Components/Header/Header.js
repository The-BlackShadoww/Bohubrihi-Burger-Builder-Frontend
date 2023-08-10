import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        token: state.token,
    };
};

const Header = (props) => {
    let links = null;
    if (props.token === null) {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink to="/login" className="Navlink">
                        Login
                    </NavLink>
                </NavItem>
            </Nav>
        );
    } else {
        links = (
            <Nav className="me-md-5">
                <NavItem className="me-2">
                    <NavLink to="/" className="Navlink">
                        BurgerBuilder
                    </NavLink>
                </NavItem>
                <NavItem className="me-2">
                    <NavLink to="/order" className="Navlink">
                        Orders
                    </NavLink>
                </NavItem>
                <NavItem className="me-2">
                    <NavLink to="/checkout" className="Navlink">
                        Checkout
                    </NavLink>
                </NavItem>
                <NavItem className="me-2">
                    <NavLink to="/logout" className="Navlink">
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
    return (
        <div className="Navigation">
            <Navbar
                style={{
                    backgroundColor: "#d70f64",
                }}
            >
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>
                {links}
            </Navbar>
        </div>
    );
};

export default connect(mapStateToProps)(Header);
