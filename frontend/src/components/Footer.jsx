export const Footer = () => (
    <footer data-testid="site-footer" className="mx-auto max-w-[1920px] px-4 pb-10 pt-20 md:px-10 md:pt-28">
        <p className="border-t border-neutral-200 pt-6 text-xs uppercase tracking-[0.2em] text-muted-custom">
            <span className="normal-case">
                ♡ Working successfully in remote advertising &amp; artworks projects from
                Spain for the whole world.{" "}
            </span>
            © {new Date().getFullYear()} Ferrán Studio. All rights reserved.
        </p>
    </footer>
);
