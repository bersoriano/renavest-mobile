import React from 'react';
import styles from './PageTitle.module.css';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className={styles.homeTitle}>{title}</h1>
  );
};

export default PageTitle;
