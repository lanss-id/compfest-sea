import React from 'react';
import Beams from '@/components/Beams';
import SplitText from '@/components/SplitText';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import ListFitur from '@/components/ListFitur';
import Footer from '@/components/Footer';

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
                    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center py-16 max-w-5xl mx-auto">
                        <ShimmerButton className="shadow-2xl my-4">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                SEA CATHERING
                            </span>
                        </ShimmerButton>
                        <h1 className="text-5xl md:text-7xl font-bold text-white">
                            <SplitText text="Healthy Meals, Anytime, Anywhere" splitType="words" />
                        </h1>
                        <p className="mt-6 max-w-4xl text-lg text-neutral-300">
                            Capai tujuan kesehatan Anda dengan mudah. SEA Catering menyediakan paket makan sehat yang dirancang khusus untuk kebutuhan nutrisi dan preferensi rasa Anda, diantar langsung ke lokasi Anda di kota-kota besar.
                        </p>
                        <div className="mt-10">
                            <ListFitur />
                        </div>
                    </div>
                </section>
                <section id='menu-section' className="relative w-full min-h-screen flex items-center justify-center">
                    
                </section>
            </main>
            <Footer />
        </>
    );
}
