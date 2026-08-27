import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const VimeoIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 7.42c-.09 1.95-1.45 4.62-4.09 8.02-2.73 3.52-5.03 5.28-6.92 5.28-1.17 0-2.16-1.08-2.97-3.24L6.43 11.1C5.83 8.94 5.03 7.86 4.03 7.86c-.15 0-.68.32-1.58.95L1.5 7.6c.99-.87 1.97-1.75 2.93-2.62C5.75 3.86 6.77 3.2 7.5 3.13c1.56-.15 2.52.92 2.88 3.2.39 2.47.66 4 .81 4.61.45 2.04.94 3.06 1.49 3.06.42 0 1.05-.66 1.89-1.99.84-1.32 1.29-2.33 1.35-3.02.12-1.14-.33-1.71-1.35-1.71-.48 0-.98.11-1.49.33C15.08 4.24 17.2 2.9 20.37 3c2.39.07 3.52 1.62 3.63 4.42z" />
    </svg>
);

const SubstackIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 5h16v3H4zM4 10h16v3H4zM4 15h16v6l-8-3.5L4 21z" />
    </svg>
);

const TikTokIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16.5 3c.4 2.3 1.9 3.8 4.5 4v3.2c-1.6 0-3.1-.5-4.5-1.4v6.6c0 3.6-2.4 6.1-5.9 6.1A5.6 5.6 0 0 1 5 15.9c0-3.3 2.6-5.7 6-5.7.3 0 .7 0 1 .1v3.3a2.7 2.7 0 0 0-1-.2c-1.5 0-2.6 1.1-2.6 2.5 0 1.5 1.1 2.5 2.5 2.5 1.5 0 2.6-1 2.6-2.8V3z" />
    </svg>
);

const SOCIALS = [
    { name: "LinkedIn", href: "#", Icon: Linkedin },
    { name: "YouTube", href: "#", Icon: Youtube },
    { name: "Vimeo", href: "#", Icon: VimeoIcon },
    { name: "Substack", href: "#", Icon: SubstackIcon },
    { name: "Instagram", href: "#", Icon: Instagram },
    { name: "Facebook", href: "#", Icon: Facebook },
    { name: "Twitter", href: "#", Icon: Twitter },
    { name: "TikTok", href: "#", Icon: TikTokIcon },
];

export const ContactSection = () => (
    <section id="contact" data-testid="contact-section" className="mx-auto max-w-[1680px] scroll-mt-24 px-6 pt-20 md:px-14 md:pt-28">
        <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-editorial text-4xl leading-tight md:text-5xl"
        >
            Contact
        </motion.h2>
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mt-8"
        >
            <a
                data-testid="contact-email-link"
                href="mailto:artworks@javierferran.com"
                className="text-accent text-2xl font-semibold tracking-tight underline underline-offset-8 decoration-2 transition-opacity duration-300 hover:opacity-70 md:text-4xl"
            >
                artworks@javierferran.com
            </a>
            <div className="mt-10 flex flex-wrap items-center gap-6">
                {SOCIALS.map(({ name, href, Icon }) => (
                    <a
                        key={name}
                        data-testid={`social-link-${name.toLowerCase()}`}
                        href={href}
                        aria-label={name}
                        className="text-[color:var(--color-ink)] transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                    >
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </a>
                ))}
            </div>
        </motion.div>
    </section>
);
