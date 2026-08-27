import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const Hero = () => (
    <section data-testid="hero-section" className="mx-auto max-w-[1680px] px-6 pt-10 md:px-14 md:pt-16">
        <div className="overflow-hidden pb-1">
            <motion.h1
                data-testid="hero-headline"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                className="text-accent font-semibold leading-[1.05] tracking-tight text-[clamp(1.5rem,3.4vw,3.1rem)] lg:whitespace-nowrap"
            >
                Brilliant advertising from a freelance art director.
            </motion.h1>
        </div>
        <motion.div
            data-testid="hero-intro"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            className="mt-5 max-w-4xl text-sm leading-relaxed text-[color:var(--color-ink)] md:text-base"
        >
            <p>
                Over the last 25 years I have been working on-site and remotely
                for many multinational advertising agencies in Madrid.
            </p>
            <p className="mt-1">
                Creativepool, the social network connecting the global creative
                industry, has included me in its{" "}
                <a
                    data-testid="creativepool-link"
                    href="https://creativepool.com/top-25/art-directors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-4 transition-opacity duration-300 hover:opacity-70"
                >
                    “The top 25 influential, inspiring and more talented Art
                    Directors around the globe”
                </a>{" "}
                in 2026.
            </p>
        </motion.div>
    </section>
);
