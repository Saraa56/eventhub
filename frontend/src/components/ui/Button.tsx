import type { ReactNode } from "react";


interface ButtonProps {
       children:ReactNode;
        id:string;
        className?:string;
        type?:"button" | "submit" | "reset";
        disabled?: boolean;
    }

export default function Button ({children, id, className, type, disabled }:ButtonProps) {
    console.log(className);
    return (
    <button id={id} 
    className={`rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ''}`}
    type={type}
    disabled={disabled}>{children}</button>
    )
}