import type { ReactNode } from "react";

interface ButtonProps {
       children:ReactNode;
        id:string;
    }

export default function Button ({children, id}:ButtonProps) {
    return (
    <button id={id}>{children}</button>
    )
}