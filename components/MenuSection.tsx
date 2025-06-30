import InfiniteMenu from './ui/ListMenu'

const items = [
    {
        image: '/food/food-1.jpg',
        link: '#',
        title: 'Menu Pilihan 1',
        description: 'Nutrisi seimbang untuk hari yang produktif.'
    },
    {
        image: '/food/food-2.jpg',
        link: '#',
        title: 'Menu Pilihan 2',
        description: 'Rasa lezat, tanpa kompromi pada kesehatan.'
    },
    {
        image: '/food/food-3.jpg',
        link: '#',
        title: 'Menu Pilihan 3',
        description: 'Bahan segar pilihan dari sumber terpercaya.'
    },
    {
        image: '/food/food-4.jpg',
        link: '#',
        title: 'Menu Pilihan 4',
        description: 'Solusi praktis untuk pola makan sehat Anda.'
    },
    {
        image: '/food/food-5.jpg',
        link: '#',
        title: 'Menu Pilihan 5',
        description: 'Energi pagi dengan sarapan bergizi kami.'
    },
    {
        image: '/food/food-6.jpg',
        link: '#',
        title: 'Menu Pilihan 6',
        description: 'Pilihan ringan untuk makan siang Anda.'
    },
    {
        image: '/food/food-7.jpg',
        link: '#',
        title: 'Menu Pilihan 7',
        description: 'Makan malam sehat, penutup hari yang sempurna.'
    }
];

export default function MenuSection() {
    return (
        <div className="w-full h-full relative">
            <InfiniteMenu items={items} />
        </div>
    )
}
