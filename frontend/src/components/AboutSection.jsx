import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const APPROACH = [
    "Creative direction with business acumen.",
    "In-depth knowledge of print and digital production.",
    "Integration of Generative AI and Prompt Engineering to transform the way creative teams work.",
];

const AGENCIES = [
    { years: "2026", name: "Dentsu" },
    { years: "2023/4", name: "VML" },
    { years: "2021/4", name: "Jellyfish" },
    { years: "2021/2", name: "VMLY&R Commerce" },
    { years: "2020/1", name: "Geometry Global" },
    { years: "2010/4", name: "El Corte Inglés" },
    { years: "2006/7", name: "Pinnacle DDB" },
    { years: "2005/6", name: "20 Segundos" },
    { years: "2004/5", name: "Thinksmart" },
    { years: "2002/4", name: "Mark Line Ogilvy" },
    { years: "2001", name: "Izquierdo Beaumont-Bennett" },
];

export const AboutSection = () => {
    const imgRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

    return (
        <section id="about" data-testid="about-section" className="mx-auto max-w-[1920px] scroll-mt-24 px-4 pt-20 md:px-10 md:pt-28">
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
                <motion.div
                    ref={imgRef}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="relative aspect-[4/5] overflow-hidden"
                >
                    <motion.img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1250' viewBox='0 0 1000 1250'%3E%3Crect width='1000' height='1250' fill='%23e7e2d8'/%3E%3C/svg%3E"
                        alt="Javier Ferrán, freelance art director"
                        style={{ y, scale: 1.12 }}
                        className="h-full w-full object-cover"
                    />
                </motion.div>
                <div className="max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="font-semibold text-4xl leading-tight md:text-5xl"
                    >
                        About
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="mt-8 space-y-4 text-sm leading-relaxed text-neutral-600 md:text-base"
                    >
                        <p className="font-semibold text-[color:var(--color-ink)]">
                            Javier Ferrán. Senior Art Director | Advertising · Production ·
                            AI-Powered Workflows | Top 25 Art Director by Creativepool.
                            <br />
                            Creative Director | Brand Design Leader | AI Creative Strategist.
                        </p>
                        <p>
                            I help brands and creative teams transform business objectives
                            into faster, smarter campaigns, brand systems and creative
                            processes through creativity, strategy and generative AI.
                        </p>
                        <p>
                            For over 25 years, I have helped agencies, major brands and
                            companies turn business objectives into ideas that build brands,
                            make an impact and drive sales.
                        </p>
                        <p>
                            I have worked as a Creative Director, Senior Art Director and
                            creative consultant for international agencies, in-house teams
                            and clients across a wide range of sectors, leading projects in
                            branding, advertising, retail, packaging, communications and
                            production from strategy through to execution.
                        </p>
                        <p>My approach combines three disciplines that rarely coexist in a single role:</p>
                        <ul className="list-disc space-y-1 pl-5">
                            {APPROACH.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p>
                            I do not see AI as a substitute for creativity, but rather as a
                            tool to eliminate friction, accelerate ideation, improve quality
                            and free up time to think more effectively.
                        </p>
                        <p>
                            Throughout my career, I have worked with agencies such as
                            Dentsu, VML, Jellyfish, Geometry Global and Ogilvy, as well as
                            leading projects for major companies such as El Corte Inglés and
                            running my own creative studio since 1998. My work has been
                            recognised by Creativepool, which has included me for six
                            consecutive years amongst the{" "}
                            <a
                                href="https://creativepool.com/top-25/art-directors"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent underline underline-offset-4 transition-opacity duration-300 hover:opacity-70"
                            >
                                Top 25 Most Influential &amp; Inspiring Art Directors Worldwide
                            </a>
                            .
                        </p>
                        <p>
                            Today, I am keen to collaborate with organisations that want to
                            build better brands, modernise their creative processes and
                            harness artificial intelligence without compromising on
                            judgement, brand culture or creative excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                        className="mt-10"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                            Agencies I have worked with
                        </h3>
                        <ul className="mt-4 space-y-1.5 text-sm text-neutral-600 md:text-base">
                            {AGENCIES.map(({ years, name }) => (
                                <li key={`${years}-${name}`} className="flex gap-3">
                                    <span className="w-16 shrink-0 font-semibold text-accent">{years}</span>
                                    <span>{name}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
