import type { ReactNode } from "react";

interface InfoCardProps {
    title: string;
    children: ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-sm font-medium uppercase tracking-wide text-slate-600">
                {title}
            </div>
            <div className="mt-3 text-slate-700">{children}</div>
        </div>
    );
}
