import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
    const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
    return (
        <button className={`${baseClass} ${className}`} {...props} />
    );
}

// Also exporting a Link version since Next.js uses links often
import Link from "next/link";
import { ComponentProps } from "react";

interface ButtonLinkProps extends ComponentProps<typeof Link> {
    variant?: "primary" | "secondary";
    className?: string; // Explicitly add className to props
}

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
    const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
    return (
        <Link className={`${baseClass} ${className}`} {...props} />
    );
}
