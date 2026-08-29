import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import {
    SiYoutube,
    SiVimeo,
    SiSubstack,
    SiInstagram,
    SiFacebook,
    SiX,
    SiTiktok,
} from "react-icons/si";

const EASE = [0.16, 1, 0.3, 1];

const SOCIALS = [
    { name: "LinkedIn", href: "#", Icon: Linkedin, color: "#0A66C2" },
    { name: "YouTube", href: "#", Icon: SiYoutube, color: "#FF0000" },
    { name: "Vimeo", href: "#", Icon: SiVimeo, color: "#1AB7EA" },
    { name: "Substack", href: "#", Icon: SiSubstack, color: "#FF6719" },
    { name: "Instagram", href: "#", Icon: SiInstagram, color: "#E4405F" },
    { name: "Facebook", href: "#", Icon: SiFacebook, color: "#1877F2" },
    { name: "Twitter", href: "#", Icon: SiX, color: "#000000" },
    { name: "TikTok", href: "#", Icon: SiTiktok, color: "#000000" },
];

export const ContactSection = () => (
    <section id="contact" data-testid="contact-section" className="mx-auto max-w-[1920px] scroll-mt-24 px-4 pt-20 md:px-10 md:pt-28">
        <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-semibold text-4xl leading-tight md:text-5xl"
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
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Get in touch
            </p>
            <a
                data-testid="contact-email-link"
                href="mailto:artworks@javierferran.com"
                className="mt-3 inline-block text-accent text-base font-semibold tracking-tight underline underline-offset-8 decoration-2 transition-opacity duration-300 hover:opacity-70 md:text-2xl"
            >
                artworks@javierferran.com
            </a>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                +34 693 243 741
                <br />
                Spain
                <br />
                Available for worldwide advertising projects.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
                {SOCIALS.map(({ name, href, Icon, color }) => (
                    <a
                        key={name}
                        data-testid={`social-link-${name.toLowerCase()}`}
                        href={href}
                        aria-label={name}
                        className="transition-all duration-300 hover:-translate-y-1"
                        style={{ color }}
                    >
                        <Icon className="h-6 w-6" />
                    </a>
                ))}
            </div>
        </motion.div>
    </section>
);
