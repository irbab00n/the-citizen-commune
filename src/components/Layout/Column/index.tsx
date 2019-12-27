import React from 'react';
import './Column.scss';

interface ColumnProps {
  [key: string]: any;
  children?: any; // Default is null
  className?: string; // Default is ''
  size?: number; // Default is 1
}

const Column = (props: ColumnProps) => {
  const { children = null, className = '', size = 1 } = props;

  return (
    <div className={`column column-size-${size} ${className}`}>{children}</div>
  );
};

export default Column;
