"use client"

import React, { useState } from 'react';
import { NavbarDemo } from '@/components/Navbar';
import Beams from '@/components/Beams';
import Footer from '@/components/Footer';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/AnimateModal';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const mealPlans = [
    {
        image: '/food/food-1.jpg',
        title: 'Diet Seimbang',
        price: 'Rp 55.000',
        description: 'Menu sehat dengan nutrisi lengkap untuk diet harian Anda.',
        nutrition: '450 Kalori, 30g Protein, 25g Karbo',
    },
    {
        image: '/food/food-2.jpg',
        title: 'Protein Boost',
        price: 'Rp 60.000',
        description: 'Tinggi protein, cocok untuk pembentukan otot dan pemulihan.',
        nutrition: '550 Kalori, 35g Protein, 30g Karbo',
    },
    {
        image: '/food/food-3.jpg',
        title: 'Vegan Fresh',
        price: 'Rp 58.000',
        description: 'Pilihan vegan dengan bahan segar dan kaya serat.',
        nutrition: '480 Kalori, 28g Protein, 22g Karbo',
    },
    {
        image: '/food/food-4.jpg',
        title: 'Low Carb',
        price: 'Rp 57.000',
        description: 'Rendah karbohidrat, cocok untuk program penurunan berat badan.',
        nutrition: '510 Kalori, 32g Protein, 18g Karbo',
    },
    {
        image: '/food/food-5.jpg',
        title: 'Breakfast Energy',
        price: 'Rp 50.000',
        description: 'Energi pagi dengan sarapan bergizi dan seimbang.',
        nutrition: '420 Kalori, 25g Protein, 35g Karbo',
    },
    {
        image: '/food/food-6.jpg',
        title: 'Lunch Lite',
        price: 'Rp 52.000',
        description: 'Pilihan makan siang ringan, tetap kenyang tanpa lemas.',
        nutrition: '390 Kalori, 22g Protein, 20g Karbo',
    },
    {
        image: '/food/food-7.jpg',
        title: 'Royal Dinner',
        price: 'Rp 65.000',
        description: 'Makan malam spesial, penutup hari yang sehat dan lezat.',
        nutrition: '530 Kalori, 40g Protein, 26g Karbo',
    },
];

export default function MealPage() {
    const [selected, setSelected] = useState(null as null | typeof mealPlans[0]);

    return (
        <>
            <main className="pt-24 min-h-screen bg-black relative">
                <Beams />
                <section className="relative z-10 max-w-6xl mx-auto px-4 py-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">Meal Plans</h1>
                    <p className="text-neutral-300 text-center mb-10 max-w-2xl mx-auto">
                        Pilih meal plan sesuai kebutuhan nutrisi dan gaya hidup Anda. Semua menu dikurasi oleh ahli gizi dan dikirim segar ke lokasi Anda.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mealPlans.map((plan) => (
                            <div
                                key={plan.title}
                                className="bg-neutral-900/70 border border-neutral-800 rounded-2xl shadow-lg flex flex-col overflow-hidden hover:scale-[1.025] transition-transform duration-200"
                            >
                                <img
                                    src={plan.image}
                                    alt={plan.title}
                                    className="w-full h-48 object-cover object-center"
                                    loading="lazy"
                                />
                                <div className="flex-1 flex flex-col p-6">
                                    <h2 className="text-2xl font-bold text-white mb-2">{plan.title}</h2>
                                    <p className="text-neutral-400 mb-4 flex-1">{plan.description}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-lg font-semibold text-green-400">{plan.price}</span>
                                        <Modal>
                                            <ModalTrigger>
                                                <ShimmerButton
                                                    as="div"
                                                    className="ml-2 px-4 py-2 text-sm font-medium"
                                                    onClick={() => setSelected(plan)}
                                                >
                                                    See More Details
                                                </ShimmerButton>
                                            </ModalTrigger>
                                            <ModalBody>
                                                <ModalContent>
                                                    <div className="flex flex-col md:flex-row gap-6">
                                                        <img
                                                            src={selected?.image}
                                                            alt={selected?.title}
                                                            className="w-full md:w-64 h-48 md:h-64 object-cover rounded-xl mb-4 md:mb-0"
                                                        />
                                                        <div className="flex-1 flex flex-col justify-between">
                                                            <div>
                                                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">{selected?.title}</h3>
                                                                <p className="text-neutral-700 dark:text-neutral-300 mb-4">{selected?.description}</p>
                                                                <div className="mb-2">
                                                                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">Info Nutrisi: </span>
                                                                    <span className="text-neutral-700 dark:text-neutral-300">{selected?.nutrition}</span>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">Harga: </span>
                                                                    <span className="text-green-500 font-bold">{selected?.price}</span>
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                                                                Pengiriman ke kota-kota besar di Indonesia.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ModalContent>
                                            </ModalBody>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
