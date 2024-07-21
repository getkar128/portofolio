import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navItems } from '../../constants'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='sticky sm:hidden flex justify-between bottom-0 p-2 bg-btn-1'>
            {navItems.map((item) => (
                <NavLink key={item.name} to={item.path} className={({ isActive }) => `${isActive && 'bg-bg-1'} flex flex-col gap-1 justify-center font-medium px-4 py-2 rounded-md hover:bg-bg-1`}>
                    <FontAwesomeIcon icon={item.icon} className='text-2xl' />
                    <p className='text-[10px] text-center leading-3'>{item.name}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default Footer