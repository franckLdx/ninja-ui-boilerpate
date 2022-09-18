import React, { FC } from "react";
import { getVariantStyle } from "../../helpers";

import styles from './input.module.scss'

interface InputProps {
  variant?: 'secondary',
}

export const Input: FC<InputProps> = ({ variant = 'secondary' }) => {
  const variantStyle = getVariantStyle(styles, 'button', variant);
  console.log('hello');

  return <input className={`${styles.input} ${variantStyle}`} />
}