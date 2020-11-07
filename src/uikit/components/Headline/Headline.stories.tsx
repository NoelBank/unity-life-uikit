import React from 'react';
import Headline from './Headline';
import { HeadlineProps } from './interfaces';

export default { component: Headline, title: 'Headline' };

const props: HeadlineProps = {
  level: 'h1',
  headline: 'Headline',
};

export const Basic = (props: HeadlineProps) => <Headline {...props} />;
Basic.args = props;
