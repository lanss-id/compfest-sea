import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";

const poppins = Poppins({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    title: "SEA Catering",
    description: "Healthy Meals, Anytime, Anywhere",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body
                className={`${poppins.variable} font-sans antialiased`}
            >
                <NavbarDemo />
                {children}
            </body>
        </html>
    );
}
