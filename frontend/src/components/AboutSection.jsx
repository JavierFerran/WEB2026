import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const CHAPTERS = [
    {
        num: "01",
        title: "Craft first",
        text: "I am an art director with 25 years of advertising behind me. I have worked on-site and remotely for multinational agencies in Madrid, leading campaigns from the first sketch to the final artwork.",
    },
    {
        num: "02",
        title: "Ideas that travel",
        text: "Print, film, digital or identity: the medium changes, the standard does not. I believe in simple ideas executed with obsessive care, and in design that serves the message, never the other way around.",
    },
    {
        num: "03",
        title: "Freelance, close by",
        text: "Working freelance means being closer to the work and to the client. Fewer layers, more conversation, and the same commitment whether the project is a global campaign or a local brand.",
    },
];

export const AboutSection = () => {
    const imgRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

    return (
        <section id="about" data-testid="about-section" className="mx-auto max-w-[1680px] scroll-mt-24 px-6 pt-20 md:px-14 md:pt-28">
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
                <div className="max-w-xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="font-editorial text-4xl leading-tight md:text-5xl"
                    >
                        About
                    </motion.h2>
                    <div className="mt-8 space-y-8">
                        {CHAPTERS.map((ch, i) => (
                            <motion.div
                                key={ch.num}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                                className="flex gap-5"
                            >
                                <span className="font-editorial text-sm italic text-accent">{ch.num}</span>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">{ch.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                                        {ch.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
