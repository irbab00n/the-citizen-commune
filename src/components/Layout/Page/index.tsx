import React from 'react';
import './Page.scss';

interface PageProps {
  [key: string]: any;
  children?: any;
  className?: string;
}

const Page: React.FC = (props: PageProps) => {
  const { children, className = '' } = props;

  return <div className={`page ${className}`}>{children}</div>;
};

export default Page;
