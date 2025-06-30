import React from 'react';
import Beams from '@/components/Beams';
import SplitText from '@/components/SplitText';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export default function HomePage() {
    return (
        <>
            <main className="relative w-full min-h-screen flex items-center justify-center text-center text-white">
                <section id='hero-section' className="relative w-full min-h-screen flex items-center justify-center">
                    <Beams />
                    <div className="pointer-events-none absolute inset-0 z-10" style={{
                        background: `
                            radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%),
                            linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.8) 100%),
                            linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.8) 100%)
                        `
                    }} />
                    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 py-16">
                        <ShimmerButton className="shadow-2xl my-4">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                SEA CATHERING
                            </span>
                        </ShimmerButton>
                        <h1 className="text-5xl md:text-7xl font-bold text-white">
                            <SplitText text="Healthy Meals, Anytime, Anywhere" splitType="words" />
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
                            SEA Catering adalah layanan katering sehat yang dapat dikustomisasi dengan pengiriman ke seluruh Indonesia, membantu Anda menikmati hidup sehat tanpa repot.
                        </p>
                        <div className="mt-10">
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-8">
                                <li className="flex items-center justify-center gap-2 text-base text-neutral-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Custom Meal</span>
                                </li>
                                <li className="flex items-center justify-center gap-2 text-base text-neutral-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Delivery ke Kota Besar</span>
                                </li>
                                <li className="flex items-center justify-center gap-2 text-base text-neutral-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Informasi Nutrisi Lengkap</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            {/* <footer>
                <div className="text-lg font-semibold text-neutral-100 tracking-wide">
                    Contact: Brian - 08123456789
                </div>
            </footer> */}
        </>
    );
}
