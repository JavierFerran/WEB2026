import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const APPROACH = [
    "Creative direction with business acumen.",
    "In-depth knowledge of print and digital production.",
    "Integration of Generative AI and Prompt Engineering to transform the way creative teams work.",
];

const AGENCIES = [
    { start: 1996, years: "1996", name: "The Grandfather + FERRÁN STUDIO" },
    { start: 2001, years: "2001", name: "Izquierdo Beaumont-Bennett" },
    { start: 2002, years: "2002/4", name: "Mark Line Ogilvy" },
    { start: 2004, years: "2004/5", name: "Thinksmart" },
    { start: 2005, years: "2005/6", name: "20 Segundos" },
    { start: 2006, years: "2006/7", name: "Pinnacle DDB" },
    { start: 2010, years: "2010/4", name: "El Corte Inglés" },
    { start: 2014, years: "2014-2020", name: "Gráfico Taller" },
    { start: 2020, years: "2020/1", name: "Geometry Global" },
    { start: 2021, years: "2021/2", name: "VMLY&R Commerce" },
    { start: 2021, years: "2021/4", name: "Jellyfish" },
    { start: 2023, years: "2023/4", name: "VML" },
    { start: 2026, years: "2026", name: "Dentsu" },
];

const TIMELINE_MIN_YEAR = 1996;
const TIMELINE_MAX_YEAR = 2026;
const TIMELINE_WIDTH = 1600;

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
                        <div className="mt-8 overflow-x-auto pb-4">
                            <div
                                className="relative"
                                style={{ minWidth: `${TIMELINE_WIDTH}px`, height: "180px" }}
                            >
                                <div
                                    className="absolute left-0 right-0 top-1/2 h-px bg-accent/30"
                                    aria-hidden="true"
                                />
                                {AGENCIES.map((item, i) => {
                                    const pct =
                                        ((item.start - TIMELINE_MIN_YEAR) /
                                            (TIMELINE_MAX_YEAR - TIMELINE_MIN_YEAR)) *
                                        100;
                                    const above = i % 2 === 0;
                                    return (
                                        <div
                                            key={`${item.start}-${item.name}`}
                                            className="absolute flex w-28 -translate-x-1/2 flex-col items-center"
                                            style={
                                                above
                                                    ? { left: `${pct}%`, bottom: "50%" }
                                                    : { left: `${pct}%`, top: "50%" }
                                            }
                                        >
                                            {above ? (
                                                <>
                                                    <span className="text-xs font-semibold text-accent">
                                                        {item.years}
                                                    </span>
                                                    <span className="mt-1 text-center text-xs leading-snug text-neutral-600">
                                                        {item.name}
                                                    </span>
                                                    <span className="mt-2 h-3 w-px bg-accent/50" />
                                                    <span className="-mt-1 h-2 w-2 rounded-full bg-accent" />
                                                </>
                                            ) : (
                                                <>
                                                    <span className="-mb-1 h-2 w-2 rounded-full bg-accent" />
                                                    <span className="h-3 w-px bg-accent/50" />
                                                    <span className="mt-2 text-xs font-semibold text-accent">
                                                        {item.years}
                                                    </span>
                                                    <span className="mt-1 text-center text-xs leading-snug text-neutral-600">
                                                        {item.name}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
