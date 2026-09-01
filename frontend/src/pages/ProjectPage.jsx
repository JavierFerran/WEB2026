import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { usePageMeta } from "@/hooks/usePageMeta";
import { scrollToTop } from "@/lib/scroll";

const linkify = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlPattern);
    return parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
            <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:opacity-70"
            >
                {part}
            </a>
        ) : (
            part
        ),
    );
};

const EASE = [0.16, 1, 0.3, 1];

export default function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    usePageMeta(
        project ? `${project.titulo} — Ferrán Studio` : "Ferrán Studio",
        project
            ? `${project.titulo} — ${project.categoria} for ${project.cliente}, ${project.año}.`
            : "Ferrán Studio portfolio.",
    );

    useEffect(() => {
        scrollToTop();
    }, [slug]);

    if (!project) return <Navigate to="/" replace />;

    return (
        <div data-testid="project-page">
            <Header />
            <main className="mx-auto max-w-[1920px] px-4 pt-10 md:px-10 md:pt-14">
                <div className="mx-auto max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                >
                    <Link
                        to="/#work"
                        data-testid="back-to-work-button"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink)] transition-colors duration-300 hover:text-accent"
                    >
                        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                        Back to Work
                    </Link>
                </motion.div>

                <div className="overflow-hidden pb-1 pt-8">
                    <motion.h1
                        data-testid="project-title"
                        initial={{ y: "115%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                        className="font-semibold text-4xl leading-tight md:text-6xl"
                    >
                        {project.titulo}
                    </motion.h1>
                </div>
                <motion.p
                    data-testid="project-meta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-custom"
                >
                    {project.categoria} · {project.cliente} · {project.año}
                </motion.p>
                </div>

                <div
                    data-testid="project-gallery"
                    className="mt-10 grid grid-cols-1 items-start justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {project.galeria.map((item, i) => {
                        const isVideo = /\.mp4$/i.test(item);
                        const mediaStyle = project.anchoNativo?.[i]
                            ? { maxWidth: `min(${project.anchoNativo[i]}px, 100%)` }
                            : undefined;

                        if (isVideo) {
                            return (
                                <motion.video
                                    key={i}
                                    src={item}
                                    poster={project.videoPoster}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                    preload="auto"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.8, ease: EASE }}
                                    style={mediaStyle}
                                    className="max-h-[70vh] w-auto max-w-full object-contain"
                                />
                            );
                        }

                        return (
                            <motion.img
                                key={i}
                                src={item}
                                alt={`${project.titulo} — imagen ${i + 1}`}
                                loading={i === 0 ? "eager" : "lazy"}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.8, ease: EASE }}
                                style={mediaStyle}
                                className="max-h-[70vh] w-auto max-w-full object-contain"
                            />
                        );
                    })}
                </div>

                <div className="mx-auto max-w-[1200px]">
                <motion.div
                    data-testid="project-description"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="mt-12 max-w-2xl space-y-4"
                >
                    {project.descripcion.split("\n\n").map((para, i) => (
                        <p
                            key={i}
                            style={{ whiteSpace: "pre-line" }}
                            className="text-base leading-relaxed text-neutral-700 md:text-lg"
                        >
                            {linkify(para)}
                        </p>
                    ))}
                </motion.div>

                <div className="mt-14">
                    <Link
                        to="/#work"
                        data-testid="back-to-work-button-bottom"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink)] transition-colors duration-300 hover:text-accent"
                    >
                        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                        Back to Work
                    </Link>
                </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
