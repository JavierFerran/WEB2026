import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, getCategoryCounts, projects } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: EASE, delay: (index % 5) * 0.07 }}
        className="mb-5 break-inside-avoid"
    >
        <Link
            to={`/work/${project.slug}`}
            data-testid={`project-card-${project.slug}`}
            className="group relative block overflow-hidden"
            aria-label={`${project.titulo} — ${project.categoria}`}
        >
            <img
                src={project.imagenPortada}
                alt={`${project.titulo} — ${project.categoria}`}
                loading="lazy"
                className="block h-auto w-full transition-opacity duration-500 ease-out group-hover:opacity-20"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                <div className="px-5 text-center">
                    <p className="text-lg font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink)] md:text-xl">
                        {project.titulo}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-custom">
                        {project.categoria}
                    </p>
                </div>
            </div>
        </Link>
    </motion.div>
);

export const WorkSection = () => {
    const [active, setActive] = useState("All");
    const counts = useMemo(() => getCategoryCounts(), []);
    const filtered = useMemo(
        () => (active === "All" ? projects : projects.filter((p) => p.categoria === active)),
        [active],
    );
    const menu = ["All", ...CATEGORIES];

    return (
        <section id="work" data-testid="work-section" className="mx-auto max-w-[1680px] scroll-mt-24 px-6 pt-16 md:px-14 md:pt-24">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <motion.h2
                    data-testid="work-section-title"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="font-semibold text-5xl leading-none md:text-6xl"
                >
                    Work
                </motion.h2>
                <nav
                    data-testid="category-menu"
                    aria-label="Filtrar proyectos por categoría"
                    className="flex flex-wrap items-baseline gap-x-5 gap-y-2 md:justify-end"
                >
                    {menu.map((cat) => {
                        const isActive = active === cat;
                        return (
                            <button
                                key={cat}
                                type="button"
                                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                                onClick={() => setActive(cat)}
                                aria-pressed={isActive}
                                className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 md:text-sm ${
                                    isActive
                                        ? "text-[color:var(--color-ink)] underline underline-offset-8 decoration-2"
                                        : "text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
                                }`}
                            >
                                {cat}
                                <sup className="ml-1 text-[0.65em]">{counts[cat]}</sup>
                            </button>
                        );
                    })}
                </nav>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    data-testid="projects-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-4 2xl:columns-5"
                >
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.slug} project={project} index={i} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};
