import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/Introduction"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Introduction
            </NavLink>
            <NavLink to="/RentProduct"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                RentProduct
            </NavLink>
            <NavLink to="/category/C"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                C
            </NavLink>
            <NavLink to="/category/D"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                D
            </NavLink>
            
        </div>
    );
}