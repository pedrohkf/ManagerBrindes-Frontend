import React from 'react'
import { useFormStatus } from 'react-dom'

interface PropsButton {
    children: string;
    className: string;
}

export default function Button({ children, className, ...props }: PropsButton) {
    const { pending } = useFormStatus();

    return (
        <div>
            {pending ? <button disabled className={className} {...props}>
                {children}
            </button > : <button className={className} {...props}>
                {children}
            </button>
            }
        </div>
    )
}
