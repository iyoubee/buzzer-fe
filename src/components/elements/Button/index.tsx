import React from 'react'
import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-white px-3 py-2 rounded-md shadow-md shadow-white hover:shadow-lg hover:shadow-white transition-shadow font-poppinsBold ${className}`}
      >
        {children}
      </button>
    </>
  )
}
