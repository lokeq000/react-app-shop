import { AuthComponent } from '../../components/auth/AuthComponent';
import cl from './Auth.module.scss';

const Auth = () => {
    return (
        <div className={cl.auth}>
            <AuthComponent />
        </div>
    );
};

export default Auth;
