import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1];

export default function LegalPage() {
    usePageMeta("Aviso Legal — Ferrán Studio", "Aviso legal de javierferran.com.");

    return (
        <div data-testid="legal-page">
            <Header />
            <main className="mx-auto max-w-[1920px] px-4 pt-10 md:px-10 md:pt-14">
                <div className="mx-auto max-w-[900px] pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink)] transition-colors duration-300 hover:text-accent"
                        >
                            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                            Back
                        </Link>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                        className="mt-8 font-semibold text-4xl leading-tight md:text-5xl"
                    >
                        Aviso Legal
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                        className="mt-8 space-y-5 text-base leading-relaxed text-neutral-700"
                    >
                        <p>
                            En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio,
                            de Servicios de la Sociedad de la Información y de Comercio
                            Electrónico (LSSI-CE), se informa de los siguientes datos:
                        </p>
                        <ul className="list-disc space-y-1 pl-5">
                            <li><strong>Titular:</strong> Javier Ferrán V.</li>
                            <li><strong>Nombre comercial:</strong> Ferrán Studio</li>
                            <li><strong>NIF:</strong> 44.355.518-H</li>
                            <li><strong>Domicilio:</strong> Huelva / Córdoba, España</li>
                            <li>
                                <strong>Contacto:</strong>{" "}
                                <a
                                    href="mailto:artworks@javierferran.com"
                                    className="text-accent underline underline-offset-4 hover:opacity-70"
                                >
                                    artworks@javierferran.com
                                </a>{" "}
                                · +34 693 243 741
                            </li>
                            <li>
                                <strong>Actividad:</strong> Dirección de arte, diseño gráfico y
                                servicios de creatividad publicitaria como profesional
                                autónomo.
                            </li>
                        </ul>
                        <p>
                            El presente sitio web (javierferran.com) tiene como finalidad
                            mostrar el portfolio profesional de Javier Ferrán y facilitar el
                            contacto con clientes interesados en sus servicios.
                        </p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
