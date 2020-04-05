import React, {Component} from 'react';
import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		UncontrolledDropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem,
		NavbarText
	} from 'reactstrap';
import {Link } from "react-router-dom";
	
export default class TopMenu extends Component{
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		};
        this.toggle = this.toggle.bind(this);
        // this.logOut = this.logOut.bind(this);
	}	

    // logOut(e){
    //     e.preventDefault();
    //     localStorage.removeItem('usertoken');
    //     this.props.history.push('/');
    // }

	toggle(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render(){
		const linkStyle = {
			textDecoration: "none",
			color: "#17a2b8"		
		}
		const brandStyle = {
			fontFamily : "Arial",
			fontSize: "30px",
			fontWeight: 100,
			color: "#17a2b8" 
			// color: "#a1e6e3" 
			
		} 
		const navStyle = {
			backgroundColor: "#1b262c" ,
			color: "#17a2b8"
		}
		return (
			<div>
				<Navbar style={navStyle}  expand="md">
					<NavbarBrand style={brandStyle} href="/">b o o k S t o r e ʕ•́ᴥ•̀ʔっ</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
						<NavLink>
							<Link style={linkStyle} to="/product">Product</Link>
						</NavLink>
						</NavItem>
                    </Nav>
                    </Collapse>
					<NavLink>
							<Link style={linkStyle} className="ml-auto" to="/register">Register</Link>
					</NavLink>
					<NavLink>
							<Link style={linkStyle} className="ml-auto" to="/login">Login</Link>
					</NavLink>
					{/* <NavLink>
                        <a href="" onClick={this.logOut}  className="nav-link">Logout</a>
					</NavLink> */}
				</Navbar>
			</div>
		);
	}
}