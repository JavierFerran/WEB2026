const ITEMS = ["Art Direction", "Advertising", "Graphic Design", "Branding", "Digital", "Editorial"];

export const Marquee = () => {
    const row = [...ITEMS, ...ITEMS];
    return (
        <div
            data-testid="editorial-marquee"
            aria-hidden="true"
            className="mt-20 overflow-hidden border-y border-neutral-200 py-5 md:mt-28"
        >
            <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
                {[0, 1].map((half) => (
                    <div key={half} className="flex items-center gap-10">
                        {row.map((item, i) => (
                            <span key={`${half}-${i}`} className="flex items-center gap-10">
                                <span className="text-2xl font-semibold italic text-[color:var(--color-muted)] md:text-3xl">
                                    {item}
                                </span>
                                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
