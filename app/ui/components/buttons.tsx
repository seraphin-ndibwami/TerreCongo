"use client";

import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
    variant?: 'primary' | 'secondary' | 'black' | 'white' | 'transparent' ;
    size ?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    variant = 'primary',
    size = 'md',
    type = "button",
    ...props
}, ref) => {
    return (
    <button
        {...props}
        className={twMerge(clsx("font-medium  shadow-sm hover:shadow-lg transition",
            {
                'bg-primary hover:bg-darck-primary text-white':variant === 'primary',   
                'bg-light-primary text-black': variant === 'secondary' ,
                'bg-black hover:bg-primary text-white': variant === 'black' ,
                'bg-white hover:bg-primary text-black': variant === 'white' ,
                'bg-transparent hover:bg-primary hover:border-primary text-white border border-white' : variant === 'transparent' ,
            },{
                'px-4 py-1.5 pb-2 text-xs' : size === 'sm',
                'px-6 py-2 text-md' : size === 'md',
                'px-8 py-2 text-lg' : size === 'lg',
            }
        ), className)}
        ref={ref}
    >
        {children}
    </button>
    )
})


Button.displayName = "Button"

export default Button;


