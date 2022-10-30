import { NavLink } from 'react-router-dom';

export default function IntroCategory() {
    return (
        <div className="intro-category-bar">
            <NavLink to="/Introduction"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <div className='intro-category-item '>#</div>
            </NavLink>
            <NavLink to="/category/澎湖"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <img src= "https://i.imgur.com/2U5uAW7.png" className='intro-category-item'/>
            </NavLink>
            <NavLink to="/category/綠島"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <img src= "https://i.imgur.com/TSLdnou.png" className='intro-category-item'/>
            </NavLink>
            <NavLink to="/category/小琉球"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <img src= "https://i.imgur.com/G51bg9o.png" className='intro-category-item'/>
            </NavLink>
            <NavLink to="/category/蘭嶼"
                className={(navData) => (navData.isActive ? 'intro-category-items intro-category-items--active' : 'intro-category-items')}>
                <img src= "https://i.imgur.com/dfCcHTO.png" className='intro-category-item'/>
            </NavLink>
        </div>
    );
}