import { Routes, Route } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/redux';
import { authRoutes, publicRoutes, adminRoutes } from '../../router/routes';
import AdminLayout from '../layouts/AdminLayout';

const AppRouter = () => {
    const isAuth = useTypeSelector((state) => state.user.user.isAuth);
    const isAdmin = useTypeSelector((state) => state.user.user.isAdmin);

    return (
        <Routes>
            {isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))
            }
                <Route path='admin' element={<AdminLayout />}>
                    {adminRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                </Route>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
                ))
            }                
        </Routes>
    );
};

export default AppRouter;
