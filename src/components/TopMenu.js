import React, {Component} from 'react';
import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Button
	} from 'reactstrap';
	import {Link } from "react-router-dom";
	
export default class TopMenu extends Component{
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		};
		this.toggle = this.toggle.bind(this);
	}	

	toggle(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render(){
		const linkStyle = {
			textDecoration: "none",
			color: "white"
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
			color: "#0f4c81"
		}
	return (
		<div>
			<Navbar style={navStyle} expand="md">
				<NavbarBrand style={brandStyle} href="/">b o o k S t o r e ʕ•́ᴥ•̀ʔっ♡</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink>
							<Button color="info" outline ><Link style={linkStyle} to='/'>Home</Link></Button>
					</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
						<Button color="info" outline ><Link style={linkStyle} to='/product'>Product</Link></Button>						</NavLink>
					</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
	</div>
	);
	}
}