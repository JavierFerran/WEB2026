import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const JOURNEY = [
    { years: "2026", name: "Dentsu", role: "Senior Art Director" },
    {
        years: "2026",
        name: "REVERSO",
        role: "Founder · Creative Direction & AI Workflows",
        note: "Top 25 Product of the Day · Product Hunt · 5th June 2026",
    },
    { years: "2023–24", name: "VML", role: "Senior Art Director" },
    { years: "2022–26", name: "University of Planning", role: "Creative Mentor" },
    { years: "2021–24", name: "Jellyfish", role: "Senior Art Director" },
    { years: "2021–22", name: "VMLY&R Commerce", role: "Senior Art Director" },
    { years: "2020–21", name: "Geometry Global", role: "Senior Art Director" },
    { years: "2014–20", name: "Gráfico Taller", role: "Founder · Artworks" },
    { years: "2010–14", name: "El Corte Inglés", role: "Creative Department" },
    { years: "2006–07", name: "Pinnacle DDB", role: "Art Direction" },
    { years: "2005–06", name: "20 Segundos", role: "Creative Direction" },
    { years: "2004–05", name: "Thinksmart", role: "Senior Art Direction" },
    { years: "2002–04", name: "Mark Line Ogilvy", role: "Creative Direction" },
    { years: "2001", name: "Izquierdo Beaumont-Bennett", role: "Art Direction" },
    { years: "1996", name: "The Grandfather", role: "Founder · Graphic Design" },
];

const AWARDS = [
    {
        org: "Creativepool UK",
        items: [
            {
                title: "Top 25 Most Influential & Inspiring Art Directors Worldwide",
                url: "https://creativepool.com/top-25/art-directors",
                detail: "2021 · 2026",
            },
        ],
    },
    {
        org: "AMPE Awards Spain",
        items: [
            {
                title: "Gold · Best Packaging Design",
                detail: "Leche Celta · 2002",
            },
            {
                title: "Gold · Best Use of Advertising",
                detail: "Leche Celta · 2002",
            },
            {
                title: "Gold · Campaign Increasing Market Share",
                detail: "Coca-Cola · Serie Mini BMW · 2002",
            },
            {
                title: "Silver · Best Customer Loyalty Campaign",
                detail: "La Casera · Cadbury-Schweppes · 2002",
            },
            {
                title: "Silver · Best Innovative Communication Strategy",
                detail: "Telefónica · 2003",
            },
            {
                title: "Silver · Best Use of Advertising",
                detail: "Ford · 2003",
            },
        ],
    },
];

export const CreativeJourneySection = () => (
    <section
        id="creative-journey"
        data-testid="creative-journey-section"
        className="mx-auto max-w-[1920px] scroll-mt-24 px-4 pt-20 md:px-10 md:pt-28"
    >
        <div className="mx-auto max-w-4xl">
        <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-sm font-semibold uppercase tracking-[0.16em] text-accent"
        >
            Creative Journey
        </motion.h2>

        <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-10">
            <motion.ol
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative space-y-3 border-l border-accent/30 pl-6"
            >
                {JOURNEY.map((item) => (
                    <li key={`${item.years}-${item.name}`} className="relative">
                        <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                        <div className="flex flex-wrap items-baseline gap-x-2">
                            <span className="text-sm font-semibold text-accent">{item.years}</span>
                            <span className="text-sm font-semibold text-[color:var(--color-ink)] md:text-base">
                                {item.name}
                            </span>
                        </div>
                        <p className="mt-0.5 text-sm text-neutral-600">{item.role}</p>
                        {item.note && (
                            <p className="mt-1 text-xs text-neutral-400">{item.note}</p>
                        )}
                    </li>
                ))}
            </motion.ol>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                    Selected Awards
                </h3>
                <div className="mt-4 space-y-5">
                    {AWARDS.map((group) => (
                        <div key={group.org}>
                            <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                                {group.org}
                            </p>
                            <ul className="mt-2 space-y-2 border-l border-neutral-200 pl-4">
                                {group.items.map((item, i) => (
                                    <li key={i} className="text-sm">
                                        {item.url ? (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-accent underline underline-offset-4 transition-opacity duration-300 hover:opacity-70"
                                            >
                                                {item.title}
                                            </a>
                                        ) : (
                                            <p className="text-neutral-700">{item.title}</p>
                                        )}
                                        <p className="mt-0.5 text-xs text-neutral-400">
                                            {item.detail}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
        </div>
    </section>
);
