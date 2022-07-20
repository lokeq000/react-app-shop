import { Routes, Route } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/redux';
import { authRoutes, publicRoutes, adminRoutes } from '../../routes';

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
            {isAdmin &&
                adminRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))
            }
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
                ))
            }                
        </Routes>
    );
};

export default AppRouter;
