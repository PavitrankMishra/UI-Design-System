import React, { HTMLAttributes } from 'react'
import clsx from "clsx";

type TVariant = "error" | "success" | "warning" | "info"

const variant: Record<TVariant, string> = {
    error: '',
    success: '',
    info: '',
    warning: ''
}

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant: TVariant
    title?: string;
    description?: string;
    className?: string;
}
const Alert = ({ variant, title, description, ...props }: AlertProps) => {
    return (
        <div
            {...props}
            className={clsx(
                "p-4 rounded-md flex flex-col gap-1",
                variant[variant],
                props.className
            )}
        >
            {title && <h6 className="font-semibold">{title}</h6>}
            {description && <p className="text-sm">{description}</p>}
        </div>
    );
};

export default Alert;
