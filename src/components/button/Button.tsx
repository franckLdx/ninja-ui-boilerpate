import React, { FC, ReactNode } from 'react'
import { getVariantStyle } from '../../helpers'

import styles from './button.module.scss'

interface ButtonProps {
  variant?: 'primary' | 'secondary',
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', children }) => {
  const variantStyle = getVariantStyle(styles, 'button', variant)
  return (<button className={`${styles.button} ${variantStyle}`}>{children}</ button>)
}