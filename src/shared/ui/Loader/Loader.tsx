import React from 'react';
import styles from './Loader.module.scss'

interface LoaderProps {
    text: string
}

export const Loader: React.FC<LoaderProps> = ({text}) => {
    return (
        <h2 className={styles.loader}>
          {text}  
        </h2>
    );
};