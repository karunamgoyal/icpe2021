import React, { Component } from 'react';
import 'materialize-css';
import { Navbar as Navigation, NavItem, Icon } from "react-materialize";
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './logos/combined3.png';
import "./index.css"
class Navbar extends Component {
    render() {
        return (
            <Navigation className="white"
                alignLinks="right"
                brand={<a className="brand-logo brand-margin" href='/'><img className="logo-size-nit" src={Logo}/></a>}
                id="mobile-nav"
                fixed={true}
                menuIcon={<MenuIcon color="secondary"/>}
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
                <NavItem className="black-text" href={process.env.PUBLIC_URL+'/'}>HOME</NavItem>
                <NavItem className="black-text" href={process.env.PUBLIC_URL+'/committee'}>COMMITTEE</NavItem>
                <NavItem className="black-text" href={process.env.PUBLIC_URL+'/keynote'}>KEYNOTE</NavItem>
                <NavItem className="black-text" href={process.env.PUBLIC_URL+'/authors'}>FOR AUTHORS</NavItem>
                <NavItem className="black-text" href={process.env.PUBLIC_URL+'/dates'}>KEY DATES</NavItem>
                <NavItem className="black-text" href={process.env.PUBLIC_URL+'/contactus'}>CONTACT US</NavItem>
            </Navigation>
        );
    }
}

export default Navbar;