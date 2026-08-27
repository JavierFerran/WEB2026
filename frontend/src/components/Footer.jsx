export const Footer = () => (
    <footer data-testid="site-footer" className="mx-auto max-w-[1680px] px-6 pb-10 pt-20 md:px-14 md:pt-28">
        <p className="border-t border-neutral-200 pt-6 text-xs uppercase tracking-[0.2em] text-muted-custom">
            © {new Date().getFullYear()} Ferrán Studio. All rights reserved.
        </p>
    </footer>
);
