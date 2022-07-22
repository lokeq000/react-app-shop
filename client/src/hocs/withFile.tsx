import { FC } from "react";

export function withFile(Component: FC) {
    return function (props: any) {
        const { onChange, ...otherProps } = props;
        
        return (
            <Component
                onChange={ onChange }
                {...otherProps}
            />
        )
    }
}