import { FC, useState } from 'react';
import { IDevice } from '../../../types/device';
import { CustomInput } from '../../../UI/customInput/CustomInput';
import cl from './DeviceForm.module.scss';

type Props = {
    initialValue: IDevice | undefined,
}

const DeviceForm: FC<Props> = ({ initialValue }) => {
    const [device, setDevice] = useState()
    return (
        <div>
            <></>
        </div>
    );
};

export default DeviceForm;
