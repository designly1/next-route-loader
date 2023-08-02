import React from 'react'
import Link from 'next/link'

interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    fit?: boolean;
}

export default function ButtonLink(props: ButtonLinkProps) {
    const {
        href,
        children,
        className,
        fit = false
    } = props;

    const classes = [
        'rounded',
        'bg-indigo-500',
        'text-white',
        'px-4',
        'py-2',
        'hover:bg-indigo-600',
        'transition-colors',
        'duration-200',
        'ease-in-out',
        'shadow-md',
        'hover:shadow-lg',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-indigo-400',
        'focus:ring-opacity-50',
        'focus:ring-offset-2',
        'focus:ring-offset-indigo-800',
    ];

    if (className) {
        classes.push(className);
    }

    if (fit) {
        classes.push('w-fit');
    }

    return (
        <Link
            className={classes.join(' ')}
            href={href}
        >{children}</Link>

    )
}
