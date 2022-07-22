import { FC, memo} from 'react';
import cl from './CustomInput.module.scss';

const CustomInput: FC<Props> = ({ label, type, value, onChange }) => {
    if (!type) type = 'text'
    return (
        <div className={cl['input-wrapper']}>
            <input
                className={cl.input}
                id={label}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder=""
            />
            <label className={cl.label} htmlFor={label}>
                {label}
            </label>
        </div>
    );
};

export default memo(CustomInput)
interface Props {
    type?: string;
    label?: string;
    value: any;
    onChange: CallableFunction;
}
