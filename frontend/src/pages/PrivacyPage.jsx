import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1];

export default function PrivacyPage() {
    usePageMeta("Política de Privacidad — Ferrán Studio", "Política de privacidad de javierferran.com.");

    return (
        <div data-testid="privacy-page">
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
                        Política de Privacidad
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                        className="mt-8 space-y-5 text-base leading-relaxed text-neutral-700"
                    >
                        <p>
                            <strong>Responsable del tratamiento:</strong> Javier Ferrán V.
                            (NIF 44.355.518-H), con domicilio en Huelva / Córdoba, España.
                            Contacto:{" "}
                            <a
                                href="mailto:artworks@javierferran.com"
                                className="text-accent underline underline-offset-4 hover:opacity-70"
                            >
                                artworks@javierferran.com
                            </a>
                            .
                        </p>
                        <p>
                            <strong>Datos que se recogen:</strong> Este sitio web no dispone
                            de formularios de contacto ni recoge datos personales de forma
                            automática a través de cookies o herramientas de analítica. El
                            único punto de contacto es un enlace de correo electrónico
                            (mailto:) que abre el gestor de correo del propio usuario; los
                            datos que decidas incluir en ese email (nombre, email, contenido
                            del mensaje) se tratan únicamente para responder a tu consulta.
                        </p>
                        <p>
                            <strong>Finalidad:</strong> Gestionar y responder a las consultas
                            recibidas por email.
                        </p>
                        <p>
                            <strong>Conservación:</strong> Los datos se conservarán mientras
                            sea necesario para atender la consulta y, posteriormente, durante
                            el plazo legal aplicable.
                        </p>
                        <p>
                            <strong>Derechos:</strong> Puedes ejercer tus derechos de acceso,
                            rectificación, supresión, oposición, limitación y portabilidad
                            escribiendo a{" "}
                            <a
                                href="mailto:artworks@javierferran.com"
                                className="text-accent underline underline-offset-4 hover:opacity-70"
                            >
                                artworks@javierferran.com
                            </a>
                            .
                        </p>
                        <p>
                            <strong>Cookies:</strong> Este sitio no utiliza cookies de
                            analítica, publicidad ni redes sociales. Solo pueden emplearse
                            cookies técnicas estrictamente necesarias para el funcionamiento
                            y seguridad del sitio (por ejemplo, las del proveedor de hosting,
                            Cloudflare), exentas de consentimiento según la normativa
                            vigente.
                        </p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
