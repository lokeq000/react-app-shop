import CustomInput  from '../../UI/customInput/CustomInput';
import cl from './AuthComponent.module.scss';
import { FC, useState } from 'react';
import { CustomBtn } from '../../UI/customBtn/CustomBtn';
import userApi from '../../http/userApi';

export const AuthComponent: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendAuth = () => {
        userApi.registration({
            email, password
        })
    }
    return (
        <div className={cl.auth}>
            <div className={cl['auth__input']}>
                <CustomInput
                    label="Email"
                    onChange={(e: string) =>
                    setEmail(e)
                    }
                    value={email}
                />
            </div>
            <div className={cl['auth__input']}>
                <CustomInput
                    label="Password"
                    onChange={(e: string) =>
                    setPassword(e)
                    }
                    value={password}
                />
            </div>
            <div 
                onClick={() => sendAuth()}
                className={cl['auth__btn-wrapper']}
            >
                <div className={cl['auth__btn']}>
                    <CustomBtn>
                        Registration
                    </CustomBtn>
                </div>
            </div>
        </div>
    );
};
