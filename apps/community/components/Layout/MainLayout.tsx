import React from 'react';

type Props = {
    children: any;
};

export default function MainLayout({children}: Props) {
    return (
        <div
            className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
            id="root">
            <main className="main-content- w-full px-[var(--margin-x)] pb-8">
                {children}
            </main>
        </div>
    );
}
