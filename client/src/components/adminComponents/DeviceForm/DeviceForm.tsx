import { FC, useCallback, useState } from 'react';
import { IDevice } from '../../../types/device';
import  CustomInput  from '../../../UI/customInput/CustomInput';
import cl from './DeviceForm.module.scss';

type Props = {
    initialValue?: IDevice,
}

const devicePattern = {
    name: '',
    desc: '',
    price: null,
    img: '',
}

const DeviceForm: FC<Props> = ({ initialValue }) => {
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [img, setImg] = useState<File>();

    const onChangeName = useCallback(((value: string) => {
        setName(value)
    }), []);
    const onChangeDesc = useCallback((value: string) => {
        setDesc(value)
    }, []);
    const onChangePrice = useCallback((value: string) => {
        setPrice(value);
    }, [])
    const onChangeImg = useCallback((value: any) => {
        setImg(value)
    }, []);

    return (
        <div>
            <div className={cl['device-input-wrapper']}>
                <CustomInput label='name' value={name} onChange={onChangeName} />
            </div>
            <div className={cl['device-input-wrapper']}>
                <CustomInput label='desc' value={desc} onChange={onChangeDesc} />
            </div>
            <div className={cl['device-input-wrapper']}>
                <CustomInput label='price' value={price} onChange={onChangePrice} />
            </div>
            <div className={cl['device-input-wrapper']}>
                <CustomInput type='file' label='img' value={img} onChange={onChangeImg} />
            </div>
        </div>
    );
};

export default DeviceForm;
