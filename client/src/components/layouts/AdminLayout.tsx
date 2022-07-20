import cl from './AdminLayout.module.scss';
import { Outlet } from 'react-router-dom';
import NavBarAdmin from '../adminComponents/navbar/NavBarAdmin';

const AdminLayout = () => {
    return (
        <div className={cl['admin']}>
            <div className={cl['admin__nav-bar']}>
                <NavBarAdmin />
            </div>
            <div className={cl['admin__content']}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
