import { FC } from 'react';
import cl from './CustomInput.module.scss';

export const CustomInput: FC<Props> = ({ label, type, value, onChange }) => {
    if (!type) type = 'text'

    return (
        <div className={cl['input-wrapper']}>
            <input
                className={cl.input}
                id={label}
                type={type}
                value={value}
                onChange={(e) => onChange(e)}
                placeholder=" "
            />
            <label className={cl.label} htmlFor={label}>
                {label}
            </label>
        </div>
    );
};

interface Props {
    type?: string;
    label: string;
    value: string | number;
    onChange: CallableFunction;
}
