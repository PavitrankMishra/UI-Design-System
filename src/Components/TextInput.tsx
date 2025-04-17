import React from "react";
import clsx from "clsx";

interface TextInputProps {
    label?: string;
    required?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    error?: boolean;
}

const TextInput = ({ label, required, helperText, fullWidth, error, ...props }: TextInputProps) => {
    return (
        <>
            <div className='text-gray-500 block text-sm font-medium'>
                <label htmlFor="">{label} {required && <span>*</span>}</label>
                <input {...props} className={clsx(props.className, "rounded p-2 outline-none border border-gray-500 texts-sm shadow", error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : "focus:ring-blue-500 focus:border-blue-500", {
                    'w-full': fullWidth
                })} />
                {error && <p className={clsx(error ? "text-red-500" : "text-gray-500")}>{helperText}</p>}
            </div>
        </>
    )
};

export default TextInput;