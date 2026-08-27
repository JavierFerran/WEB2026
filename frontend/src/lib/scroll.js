let lenis = null;

export const setLenis = (instance) => {
    lenis = instance;
};

export const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
        lenis.scrollTo(el, { offset: -72, duration: 1.4 });
    } else {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

export const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
};
