import InfiniteMenu from './ui/ListMenu'

const items = [
    {
        image: '/food/food-1.jpg',
        link: '#',
        title: 'Menu Pilihan 1',
        description: 'Nutrisi seimbang untuk hari yang produktif.',
        nutrition: '450 Kalori, 30g Protein, 25g Karbo'
    },
    {
        image: '/food/food-2.jpg',
        link: '#',
        title: 'Menu Pilihan 2',
        description: 'Rasa lezat, tanpa kompromi pada kesehatan.',
        nutrition: '550 Kalori, 35g Protein, 30g Karbo'
    },
    {
        image: '/food/food-3.jpg',
        link: '#',
        title: 'Menu Pilihan 3',
        description: 'Bahan segar pilihan dari sumber terpercaya.',
        nutrition: '480 Kalori, 28g Protein, 22g Karbo'
    },
    {
        image: '/food/food-4.jpg',
        link: '#',
        title: 'Menu Pilihan 4',
        description: 'Solusi praktis untuk pola makan sehat Anda.',
        nutrition: '510 Kalori, 32g Protein, 28g Karbo'
    },
    {
        image: '/food/food-5.jpg',
        link: '#',
        title: 'Menu Pilihan 5',
        description: 'Energi pagi dengan sarapan bergizi kami.',
        nutrition: '420 Kalori, 25g Protein, 35g Karbo'
    },
    {
        image: '/food/food-6.jpg',
        link: '#',
        title: 'Menu Pilihan 6',
        description: 'Pilihan ringan untuk makan siang Anda.',
        nutrition: '390 Kalori, 22g Protein, 20g Karbo'
    },
    {
        image: '/food/food-7.jpg',
        link: '#',
        title: 'Menu Pilihan 7',
        description: 'Makan malam sehat, penutup hari yang sempurna.',
        nutrition: '530 Kalori, 40g Protein, 26g Karbo'
    }
];

export default function MenuSection() {
    return (
        <div className="w-full h-full relative">
            <InfiniteMenu items={items} />
        </div>
    )
}
