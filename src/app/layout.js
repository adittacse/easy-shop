import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import classNames from "@/utils/classNames";
import Providers from "@/providers";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
    variable: "--font-roboto",
});

export const metadata = {
    title: "Easy Shop",
    description: "Next JS eCommerce Web Application",
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en" data-theme="dark" className="transition-all">
            <body className={classNames(roboto.variable, "container mx-auto px-2 font-roboto")}>
                <Providers>
                    <div className="flex min-h-screen flex-col justify-between">
                        <div>
                            <Navbar></Navbar>
                            <main className="mt-5">
                                {children}
                            </main>
                        </div>
                        <Footer></Footer>
                    </div>
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout;