import { NavLink } from "react-router-dom"
import { navItems } from "../../constants"

const NavBar = () => {

    return (
        <nav className="hidden sm:flex gap-2">
            {navItems.map((item) => (
                <NavLink key={item.name} to={item.path} className={({ isActive }) => `${isActive && 'bg-bg-1'} text-sm font-medium px-4 py-2 rounded-md hover:bg-bg-1`}>
                    {item.name}
                </NavLink>
            ))}
        </nav>
    )
}

export default NavBar