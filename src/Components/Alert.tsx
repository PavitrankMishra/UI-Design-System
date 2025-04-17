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
    className?: string
}
const Alert = ({ variant, title, description, ...props }: AlertProps) => {
    return (
        <div
            {...props} className={clsx(props.className, "flex flex-col gap-2")}
        >
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    )
}

export default Alert;
