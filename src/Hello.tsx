import React, { FC } from 'react';
import { ColorDemo } from './ColorDemo';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div className={'Hello'}>
    <ColorDemo />
  </div>;
};
