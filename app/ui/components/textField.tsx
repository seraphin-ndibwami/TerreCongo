"use client";

import React, { ChangeEvent, forwardRef} from 'react';
import clsx from 'clsx';
import { twMerge } from "tailwind-merge";


// Définir un type pour les différentes options de TextField
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    onChange ?: (e: ChangeEvent<HTMLInputElement>) => void;
    label ?: string;
    icon ?: React.ReactNode;
    shape ?: 'rounded' | 'square';
    className ?: string;
    state ?: 'normal' | 'error' | 'success' | 'active';
    helperText ?: string;

};



// Définir un composant générique TextField
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
    onChange,
    value,
    label,
    id,
    icon,
    className,
    state = 'normal',
    shape = 'square',
    helperText,  
    ...rest
}, ref) => {

    return (
        <div className='relative w-full flex flex-col gap-2'>
            {label && <label htmlFor={id} className='font-medium text-sm'>{label}</label>}
            {icon && icon}
            <div className='relative w-full'>
                <input  {...rest} ref={ref} value={value} onChange={onChange} 
                className={twMerge(clsx(`h-10 min-w-[180px]
                    border-2 w-full p-2 focus:outline-none 
                    focus:border-black transition text-sm`,
                    {
                        'border-divider': state === 'normal',
                        'border-primary': state === 'error',
                        'border-accent': state === 'success',
                        'border-black': state === 'active',
                        'rounded-full': shape === 'rounded',
                        'rounded-md': shape === 'square',
                    }), className)}
               />
            </div>
            {helperText && <p className={clsx('text-xs', {
                'text-primary': state === 'error',
                'text-accent': state === 'success',
                'text-black': state === 'active',
            })}>{helperText}</p>}
        </div>
    );
});


TextField.displayName = "TextField"

