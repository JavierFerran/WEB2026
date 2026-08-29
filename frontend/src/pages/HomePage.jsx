import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import { scrollToSection, scrollToTop } from "@/lib/scroll";

export default function HomePage() {
    const location = useLocation();
    usePageMeta(
        "Ferrán Studio — Freelance Art Director",
        "Brilliant advertising from a freelance art director. Art direction, artworks, brands, web and apps from Madrid.",
    );

    useEffect(() => {
        if (location.hash) {
            const t = setTimeout(() => scrollToSection(location.hash.slice(1)), 150);
            return () => clearTimeout(t);
        }
        scrollToTop();
    }, [location.hash]);

    return (
        <div data-testid="home-page">
            <Header />
            <main>
                <Hero />
                <WorkSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
