import React from 'react';
import { HeadlineProps } from './interfaces';
import styles from './Headline.module.scss';

const Headline: React.FC<HeadlineProps> = ({ level = 'h1', headline }) => {
  const TAG = level;

  return <TAG className={styles.base}>{headline}</TAG>;
};

export default Headline;
