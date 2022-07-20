import { CustomInput } from '../../UI/customInput/CustomInput';
import cl from './AuthComponent.module.scss';
import { useState } from 'react';
import { CustomBtn } from '../../UI/customBtn/CustomBtn';
import userApi from '../../http/userApi';

export const AuthComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendAuth = () => {
        userApi.registration({
            email, password
        })
    }
    return (
        <div className={cl.auth}>
            {/* @ts-ignore */}
            <div className={cl['auth__input']}>
                <CustomInput
                    label="Email"
                    onChange={(e: { target: HTMLInputElement }) =>
                    setEmail(e.target.value)
                    }
                    value={email}
                />
            </div>
            <div className={cl['auth__input']}>
                <CustomInput
                    label="Password"
                    onChange={(e: { target: HTMLInputElement }) =>
                    setPassword(e.target.value)
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
