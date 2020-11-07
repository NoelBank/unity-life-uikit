import React from 'react';
import { ButtonProps } from './interfaces';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.base}>{label}</button>;
};

export default Button;
