import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					<img src="https://elementscpa.com/wp-content/uploads/2017/08/elementscpa-business-infinity-loop-tal-e1535549335771.png" alt="Company logo" style={{width: "100px", height: "50px"}}/>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/about" activestyle>
						About
					</NavLink>
					<NavLink to="/host-families" activestyle>
						Host Family
					</NavLink>
					<NavLink to="/Au-pair" activestyle>
						Au Pair
					</NavLink>
					<NavLink to="/Favorites" activestyle>
						Favorite AuPairs
					</NavLink>
					{/* <NavLink to="/sign-up" activestyle>
						Sign Up
					</NavLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/sign-in">Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	)
}

export default Navbar
