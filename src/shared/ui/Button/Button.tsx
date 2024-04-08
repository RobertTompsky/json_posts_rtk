import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss'

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>>
    = ({
        children,
        ...rest
    }) => {
        return (
            <button
                className={styles.button}
                {...rest}>
                {children}
            </button>
        );
    };
