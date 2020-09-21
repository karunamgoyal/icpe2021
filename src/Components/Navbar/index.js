import React, { Component } from 'react';
import 'materialize-css';
import { Navbar as Navigation, NavItem, Dropdown} from "react-materialize";
import MenuIcon from '@material-ui/icons/Menu';
import DropIcon from '@material-ui/icons/ArrowDropDown';
import Logo from './logos/combined3.png';
import "./index.css"
class Navbar extends Component {
    render() {
        return (
            <Navigation className="white"
                alignLinks="right"
                brand={<a className="brand-logo brand-margin" href='/'><img className="logo-size-nit" src={Logo} alt="NITKKRLOGO"/></a>}
                id="mobile-nav"
                fixed={true}
                menuIcon={<MenuIcon color="secondary" />}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}>
                <NavItem className="black-text" href="/">HOME</NavItem>
                <Dropdown
                    id="Dropdown_6"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: false,
                        container: null,
                        coverTrigger: false,
                        hover: false,
                        inDuration: 150,
                        edge: 'bottom',
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<a href="#!" className="text-black">COMMITTEE{' '}<DropIcon /></a>}
                >
                    <a className="organizingLink" href="/advisory">ADVISORY COMMITTEE</a>
                    <a className="organizingLink" href="/committee">ORGANIZING COMMITTEE</a>
                </Dropdown>
                <NavItem className="black-text" href="/keynote">KEYNOTE</NavItem>
                <Dropdown
                    id="Dropdown_7"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: false,
                        container: null,
                        coverTrigger: false,
                        hover: false,
                        inDuration: 150,
                        edge: 'bottom',
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<a href="#!" className="text-black">FOR AUTHORS{' '}<DropIcon /></a>}
                >
                    <a className="organizingLink" href="/authors">TRACKS</a>
                    <a className="organizingLink" href="/registration">REGISTRATION</a>
                </Dropdown>
                <NavItem className="black-text" href="/dates">KEY DATES</NavItem>
                <NavItem className="black-text" href="/contactus">CONTACT US</NavItem>
            </Navigation>
        );
    }
}

export default Navbar;