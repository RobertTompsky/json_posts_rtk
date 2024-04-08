import React from 'react';
import styles from './NotFound.module.scss'

export const NotFound: React.FC = () => {
    return (
        <main className={styles.notFound}>
            <h1>404. Страница не найдена</h1>
        </main>
    );
};
