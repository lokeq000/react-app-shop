import { CustomInput } from '../../UI/customInput/CustomInput';
import cl from './AuthComponent.module.scss';
import { useState } from 'react';
import { CustomBtn } from '../../UI/customBtn/CustomBtn';

export const AuthComponent = () => {
    const [test, setTest] = useState('');

    return (
        <div className={cl.auth}>
            {/* @ts-ignore */}
            <div className={cl['auth__input']}>
                <CustomInput
                    label="Email"
                    onChange={(e: { target: HTMLInputElement }) =>
                        setTest(e.target.value)
                    }
                    value={test}
                />
            </div>
            <div className={cl['auth__input']}>
                <CustomInput
                    label="Password"
                    onChange={(e: { target: HTMLInputElement }) =>
                        setTest(e.target.value)
                    }
                    value={test}
                />
            </div>
            <div className={cl['auth__btn-wrapper']}>
                <div className={cl['auth__btn']}>
                    <CustomBtn>Registration</CustomBtn>
                </div>
            </div>
        </div>
    );
};
