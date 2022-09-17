import React, { FC, ReactNode } from 'react'

import styles from './button.module.scss'

interface ButtonProps {
  variants?: 'primary' | 'secondary',
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ variants = 'primary', children }) => {
  const variantClassName = `button--${variants}`
  return (<button className={`${styles.button} ${styles[variantClassName]}`}>{children}</button>)
}