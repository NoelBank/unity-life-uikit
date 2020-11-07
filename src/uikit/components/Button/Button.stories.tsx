import React from 'react';
import Button from './Button';
import { ButtonProps } from './interfaces';

export default { component: Button, title: 'Button' };

const props: ButtonProps = {
  label: 'Warenkorb',
};

export const Basic = (props: ButtonProps) => <Button {...props} />;
Basic.args = props;
