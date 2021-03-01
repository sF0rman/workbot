import React, { ReactNode } from 'react';
import './Button.css';

interface IProps {
  children?: ReactNode,
  useSecondary?: boolean
  handleClick?: () => void
}

const Button = ({children, useSecondary, handleClick}:IProps) => {
  return (
    <>
      <button onClick={handleClick} className={useSecondary ? 'secondary' : 'primary'}>{children ? children : 'Click me!'}</button>
    </>
  )
}

export default Button;