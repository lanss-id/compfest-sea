export default function Footer() {
    return (
        <footer className="w-full mt-12 mb-4 mx-auto">
            <div className="bg-[#18181b] rounded-2xl py-10 max-w-5xl mx-auto shadow-lg border border-neutral-800 text-center">
                <h2 className="text-3xl font-bold text-neutral-100 mb-2">Butuh Katering Sehat?</h2>
                <p className="text-neutral-400 mb-8">Tim kami siap membantu Anda memilih menu sehat terbaik untuk kebutuhan Anda.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* WhatsApp */}
                    <div className="flex items-center gap-4 bg-gray-100/10 rounded-xl px-6 py-4">
                        <span className="p-2 rounded-lg">
                            {/* Icon telepon/whatsapp */}
                            <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" /></svg>
                        </span>
                        <div className="text-left">
                            <div className="font-semibold text-neutral-100">Chat via WhatsApp</div>
                            <div className="text-neutral-400 text-sm">+62 851-8723-0007</div>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="hidden md:block w-px h-12 bg-neutral-800" />
                    {/* Email */}
                    <div className="flex items-center gap-4 bg-gray-100/10 rounded-xl px-6 py-4">
                        <span className="p-2 rounded-lg">
                            {/* Icon email */}
                            <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
                        </span>
                        <div className="text-left">
                            <div className="font-semibold text-neutral-100">Email Kami</div>
                            <div className="text-neutral-400 text-sm">seacatering@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
