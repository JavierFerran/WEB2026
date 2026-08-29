import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/lib/scroll";

const NAV = [
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
];

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goTo = (id) => {
        if (location.pathname !== "/") {
            navigate(`/#${id}`);
        } else {
            scrollToSection(id);
        }
    };

    return (
        <header
            data-testid="site-header"
            className="sticky top-0 z-50 bg-white/90 backdrop-blur-md"
        >
            <div className="mx-auto flex max-w-[1920px] items-center justify-between px-4 py-5 md:px-10 md:py-7">
                <Link to="/" data-testid="header-logo" aria-label="Ferrán Studio — home">
                    <img
                        src="/assets/logo.png"
                        alt="Ferrán Studio"
                        className="h-8 w-auto md:h-11"
                    />
                </Link>
                <nav className="flex items-center gap-6 md:gap-10" aria-label="Principal">
                    {NAV.map((item, i) => (
                        <button
                            key={item.id}
                            type="button"
                            data-testid={`nav-${item.id}`}
                            onClick={() => goTo(item.id)}
                            className={`text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 md:text-base ${
                                i === 0
                                    ? "text-accent underline underline-offset-8 decoration-2"
                                    : "text-[color:var(--color-ink)] hover:text-accent"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};
