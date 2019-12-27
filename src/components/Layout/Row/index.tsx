import React from 'react';
import './Row.scss';

interface RowProps {
  [key: string]: any;
  className?: string;
  children?: any;
}

const Row = (props: RowProps) => {
  const { className = '', children = null } = props;

  return <div className={`row ${className}`}>{children}</div>;
};

export default Row;
