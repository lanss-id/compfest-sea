import React from 'react';

const fiturList = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        title: 'Kustomisasi Menu',
        description: 'Menu sesuai selera & kebutuhan Anda.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9m17.25 9v-9m-17.25-9h9.75l4.5 4.5h3.75a1.125 1.125 0 0 1 1.125 1.125v9.75" />
            </svg>
        ),
        title: 'Pengiriman Luas',
        description: 'Antar ke kota-kota besar di Indonesia.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Informasi Nutrisi',
        description: 'Nutrisi tiap hidangan transparan.',
    },
];

export default function ListFitur() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            {fiturList.map((fitur, index) => (
                <div key={index} className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 text-center flex flex-col items-center">
                    <div className="flex-shrink-0">
                        {fitur.icon}
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white mb-2">{fitur.title}</h3>
                        <p className="text-neutral-400 text-sm">{fitur.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
