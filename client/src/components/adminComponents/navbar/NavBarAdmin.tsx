import { FC } from "react";
import { NavLink } from "react-router-dom";
import { AdminRoutes } from "../../../router/consts";
import cl from './NavBarAdmin.module.scss';

const navBarList = [
    {
        name: 'Добавить девайс',
        link: AdminRoutes.CREATE_DEVICE
    }
]

const NavBarAdmin: FC = () => {
  return (
    <ul className={cl['nav-list']}>
        {
            navBarList.map(({ name, link }) => (
                <li>
                    <NavLink
                        className={({ isActive }) => isActive 
                            ? `${cl['link--active']} ${cl['link']}` 
                            : cl['link']
                        }
                        to={link}
                        key={link}
                    >
                        {name}
                    </NavLink>
                </li>
            ))
        }
    </ul>
  )
}

export default NavBarAdmin