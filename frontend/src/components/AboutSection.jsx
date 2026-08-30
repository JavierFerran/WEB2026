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
    {
        years: "2026",
        name: "Reverso",
        awards: [
            {
                title: "Top 25 Product of the Day",
                detail: "Product Hunt · 05 Junio 2026",
            },
        ],
    },
    { years: "2023/4", name: "VML" },
    { years: "2022/6", name: "University of Planning" },
    { years: "2021/4", name: "Jellyfish" },
    { years: "2021/2", name: "VMLY&R Commerce" },
    { years: "2020/1", name: "Geometry Global" },
    { years: "2014/20", name: "Gráfico Taller" },
    { years: "2010/4", name: "El Corte Inglés" },
    { years: "2006/7", name: "Pinnacle DDB" },
    { years: "2005/6", name: "20 Segundos" },
    { years: "2004/5", name: "Thinksmart" },
    {
        years: "2002/4",
        name: "Mark Line Ogilvy",
        awards: [
            {
                title: "Oro, mejor diseño de packaging, por Leche Celta.",
                detail: "Expedido por III Premios AMPE · sept. 2003",
            },
            {
                title: "Oro, mejor uso de la publicidad, por Leche Celta.",
                detail: "Expedido por III Premios AMPE · sept. 2003",
            },
            {
                title: "Plata, mejor estrategia de comunicación innovadora, por Telefónica.",
                detail: "Expedido por IV Premios AMPE · sept. 2003",
            },
            {
                title: "Plata, mejor uso de la publicidad, por Ford.",
                detail: "Expedido por IV Premios AMPE · sept. 2003",
            },
            {
                title: "Oro, mejor campaña que aumenta cuota de mercado, por Coca-Cola Serie Mini BMW.",
                detail: "Expedido por III Premios AMPE · sept. 2002",
            },
            {
                title: "Plata, mejor campaña de fidelización, por La Casera, Cadbury-Schweppes.",
                detail: "Expedido por III Premios AMPE · sept. 2002",
            },
        ],
    },
    { years: "2001", name: "Izquierdo Beaumont-Bennett" },
    { years: "1996", name: "The Grandfather" },
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
                >
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <motion.img
                            src="/assets/about/javier-ferran.jpg"
                            alt="Javier Ferrán, freelance art director"
                            style={{ y, scale: 1.12 }}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative mt-5 aspect-[16/10] overflow-hidden">
                        <img
                            src="/assets/about/javier-y-su-hijo.jpg"
                            alt="Javier Ferrán con su hijo Javier"
                            className="h-full w-full object-cover"
                        />
                    </div>
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
                            AI-Powered Workflows.
                            <br />
                            Top 25 Art Director by Creativepool.
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
                        <p>My approach combines three disciplines:</p>
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
                        <ol className="relative mt-6 space-y-6 border-l border-accent/30 pl-6">
                            {AGENCIES.map((item) => (
                                <li key={`${item.years}-${item.name}`} className="relative">
                                    <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                                    <div className="flex flex-wrap items-baseline gap-x-2">
                                        <span className="text-sm font-semibold text-accent">
                                            {item.years}
                                        </span>
                                        <span className="text-sm text-neutral-700 md:text-base">
                                            {item.name}
                                        </span>
                                    </div>
                                    {item.awards && (
                                        <ul className="mt-3 space-y-3 border-l border-neutral-200 pl-4">
                                            {item.awards.map((award, i) => (
                                                <li key={i} className="text-xs text-neutral-500">
                                                    <p>{award.title}</p>
                                                    <p className="text-neutral-400">{award.detail}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
