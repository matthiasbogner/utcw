import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/aktuelles' activeStyle>
			About
		</NavLink>
		<NavLink to='/platzreservierung' activeStyle>
			Events
		</NavLink>
		<NavLink to='/mitgliedschaft' activeStyle>
			Annual Report
		</NavLink>
		<NavLink to='/training' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/mannschaftsmeisterschaft' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/ueber-uns' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
