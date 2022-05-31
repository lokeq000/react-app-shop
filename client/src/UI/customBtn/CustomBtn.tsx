import { FC, ReactNode } from "react"
import cl from './CustomBtn.module.scss';

export const CustomBtn: FC<Props> = ({ children }) => {
  return (
    <button className={cl.button}>
        {children}
    </button>
  )
}

interface Props {
    children: ReactNode
}