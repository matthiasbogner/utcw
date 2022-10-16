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
		<NavLink to='/' activeStyle>
			Aktuelles
		</NavLink>
		<NavLink to='/platzreservierung' activeStyle>
			Platzreservierung
		</NavLink>
		<NavLink to='/mitgliedschaft' activeStyle>
			Mitgliedschaft
		</NavLink>
		<NavLink to='/training' activeStyle>
			Training
		</NavLink>
		<NavLink to='/mannschaftsmeisterschaft' activeStyle>
			Mannschaftsmeisterschaft
		</NavLink>
		<NavLink to='/ueber-uns' activeStyle>
			Über Uns
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
