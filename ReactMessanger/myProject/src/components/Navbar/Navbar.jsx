import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to='/profile' className={activeClass()}>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs' className={activeClass()}>
					Message
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/users' className={activeClass()}>
					Users
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news' className={activeClass()}>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' className={activeClass()}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/settings' className={activeClass()}>
					Settigns
				</NavLink>
			</div>
		</nav>
	);
};

function activeClass() {
	return (navItem) => (navItem.isActive ? s.active : s.item);
}

export default Navbar;
