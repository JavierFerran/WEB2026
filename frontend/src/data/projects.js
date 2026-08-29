const ph = (w, h, color) =>
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'%3E%3Crect width='${w}' height='${h}' fill='${color.replace("#", "%23")}'/%3E%3C/svg%3E`;

export const CATEGORIES = ["Art Direction", "Artworks", "Brands", "Web", "Apps"];

export const projects = [
    {
        id: 1,
        slug: "eclipse-solar",
        categoria: "Art Direction",
        imagenPortada: ph(900, 1350, "#1c2b45"),
        titulo: "Eclipse Solar",
        cliente: "Banco Santander",
        año: 2024,
        galeria: [ph(1200, 1800, "#1c2b45"), ph(1800, 1200, "#22345a"), ph(1400, 1400, "#2a3f6e")],
        descripcion:
            "Campaign for a total solar eclipse visible from Spain. A lighthouse that guides looks and illuminates culture: we turned the eclipse into a beacon over the city skyline, blending live data of the astronomical event with outdoor, print and film. The piece ran across national media during the week of the eclipse and became one of the most shared financial-brand actions of the year.",
    },
    {
        id: 2,
        slug: "rioja-sunset",
        categoria: "Art Direction",
        imagenPortada: ph(1400, 900, "#c9702e"),
        titulo: "Atardecer en la Rioja",
        cliente: "Campo Viejo",
        año: 2023,
        galeria: [ph(1600, 1000, "#c9702e"), ph(1200, 1500, "#d98a4b"), ph(1600, 1000, "#a9551d")],
        descripcion:
            "A tribute to the golden hour over the Ebro valley. Art direction for a limited-edition reserva label and its launch film, shot entirely at dusk during the harvest.",
    },
    {
        id: 3,
        slug: "finalissima",
        categoria: "Artworks",
        imagenPortada: ph(1000, 1000, "#b3122e"),
        titulo: "Finalissima",
        cliente: "RFEF",
        año: 2022,
        galeria: [ph(1400, 1400, "#b3122e"), ph(1600, 1000, "#8e0e24")],
        descripcion:
            "Match-day artwork for the Finalissima between Spain and Argentina. An embroidered heart on the national shirt: craft, thread and rivalry in a single frame.",
    },
    {
        id: 4,
        slug: "strings-and-light",
        categoria: "Artworks",
        imagenPortada: ph(900, 1400, "#2b2118"),
        titulo: "Strings & Light",
        cliente: "Proyecto personal",
        año: 2025,
        galeria: [ph(900, 1400, "#2b2118")],
        descripcion:
            "Personal still-life series. A single acoustic guitar under theatrical spotlights, exploring how light alone can build volume, texture and emotion on an everyday object.",
    },
    {
        id: 5,
        slug: "atlantic-wilderness",
        categoria: "Brands",
        imagenPortada: ph(1500, 900, "#c8a24a"),
        titulo: "Atlantic Wilderness",
        cliente: "North Gear Co.",
        año: 2023,
        galeria: [ph(1500, 900, "#c8a24a"), ph(1200, 1500, "#a98840"), ph(1500, 900, "#dfc27a"), ph(1100, 1100, "#8f7334")],
        descripcion:
            "Full brand identity for an outdoor equipment maker: carved-wood logotype, topographic pattern system, packaging and retail signage inspired by Atlantic cliffs and desert dunes.",
    },
    {
        id: 6,
        slug: "noir-parfum",
        categoria: "Brands",
        imagenPortada: ph(1000, 1200, "#3a3a44"),
        titulo: "Noir Parfum",
        cliente: "Maison Noir",
        año: 2024,
        galeria: [ph(1000, 1200, "#3a3a44")],
        descripcion: "Naming, bottle art direction and launch campaign for a niche fragrance house.",
    },
    {
        id: 7,
        slug: "banca-digital",
        categoria: "Web",
        imagenPortada: ph(1500, 950, "#1f4e5f"),
        titulo: "Banca Digital",
        cliente: "Fintech confidential",
        año: 2025,
        galeria: [ph(1500, 950, "#1f4e5f"), ph(1500, 950, "#2a6a80"), ph(1100, 1400, "#173a46")],
        descripcion:
            "Art direction and design system for the public site of a digital bank: modular editorial layouts, motion guidelines and an accessible component library used by three product teams.",
    },
    {
        id: 8,
        slug: "metro-app",
        categoria: "Apps",
        imagenPortada: ph(950, 1400, "#34538f"),
        titulo: "Metro de Madrid App",
        cliente: "Metro de Madrid (concept)",
        año: 2022,
        galeria: [ph(950, 1400, "#34538f"), ph(950, 1400, "#4a6cb3")],
        descripcion:
            "Concept redesign of the official metro app: live arrivals, accessible wayfinding and a line-map interaction model tested with daily commuters.",
    },
    { id: 9, slug: "proyecto-pendiente-01", categoria: "Art Direction", imagenPortada: ph(1200, 1500, "#e3ddd2"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1200, 1500, "#e3ddd2")], descripcion: "Proyecto pendiente de documentar." },
    { id: 10, slug: "proyecto-pendiente-02", categoria: "Art Direction", imagenPortada: ph(1500, 950, "#dce3ec"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1500, 950, "#dce3ec")], descripcion: "Proyecto pendiente de documentar." },
    { id: 11, slug: "proyecto-pendiente-03", categoria: "Art Direction", imagenPortada: ph(1100, 1100, "#e8e0d6"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1100, 1100, "#e8e0d6")], descripcion: "Proyecto pendiente de documentar." },
    { id: 12, slug: "proyecto-pendiente-04", categoria: "Artworks", imagenPortada: ph(1000, 1400, "#d9e2d8"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1000, 1400, "#d9e2d8")], descripcion: "Proyecto pendiente de documentar." },
    { id: 13, slug: "proyecto-pendiente-05", categoria: "Artworks", imagenPortada: ph(1400, 1000, "#e6dfe8"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1400, 1000, "#e6dfe8")], descripcion: "Proyecto pendiente de documentar." },
    { id: 14, slug: "proyecto-pendiente-06", categoria: "Brands", imagenPortada: ph(1200, 1200, "#efe6d5"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1200, 1200, "#efe6d5")], descripcion: "Proyecto pendiente de documentar." },
    { id: 15, slug: "proyecto-pendiente-07", categoria: "Brands", imagenPortada: ph(1500, 1000, "#dfe7e3"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1500, 1000, "#dfe7e3")], descripcion: "Proyecto pendiente de documentar." },
    { id: 16, slug: "proyecto-pendiente-08", categoria: "Web", imagenPortada: ph(1400, 900, "#e9e2e2"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1400, 900, "#e9e2e2")], descripcion: "Proyecto pendiente de documentar." },
    { id: 17, slug: "proyecto-pendiente-09", categoria: "Web", imagenPortada: ph(1200, 1400, "#d6dee8"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1200, 1400, "#d6dee8")], descripcion: "Proyecto pendiente de documentar." },
    { id: 18, slug: "proyecto-pendiente-10", categoria: "Apps", imagenPortada: ph(950, 1400, "#e4e0ea"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(950, 1400, "#e4e0ea")], descripcion: "Proyecto pendiente de documentar." },
    { id: 19, slug: "proyecto-pendiente-11", categoria: "Apps", imagenPortada: ph(950, 1400, "#dde5dd"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(950, 1400, "#dde5dd")], descripcion: "Proyecto pendiente de documentar." },
    { id: 20, slug: "proyecto-pendiente-12", categoria: "Apps", imagenPortada: ph(1100, 1100, "#eae4d8"), titulo: "Proyecto pendiente", cliente: "—", año: 2026, galeria: [ph(1100, 1100, "#eae4d8")], descripcion: "Proyecto pendiente de documentar." },
    { id: 21, slug: "thefutourist", categoria: "Brands", imagenPortada: "/assets/brands/thefutourist.png", titulo: "TheFutourist", cliente: "—", año: 2026, galeria: ["/assets/brands/thefutourist.png"], descripcion: "" },
    { id: 22, slug: "the-english-garden-preschool", categoria: "Brands", imagenPortada: "/assets/brands/tegp.png", titulo: "The English Garden Preschool", cliente: "—", año: 2026, galeria: ["/assets/brands/tegp.png"], descripcion: "" },
    { id: 23, slug: "the-english-garden", categoria: "Brands", imagenPortada: "/assets/brands/teg.png", titulo: "The English Garden", cliente: "—", año: 2026, galeria: ["/assets/brands/teg.png"], descripcion: "" },
    { id: 24, slug: "studio8-arquitectura", categoria: "Brands", imagenPortada: "/assets/brands/studio8.png", titulo: "Studio8 Arquitectura", cliente: "—", año: 2026, galeria: ["/assets/brands/studio8.png"], descripcion: "" },
    { id: 25, slug: "sponsoring-bartering", categoria: "Brands", imagenPortada: "/assets/brands/sponsoring.png", titulo: "Sponsoring & Bartering", cliente: "—", año: 2026, galeria: ["/assets/brands/sponsoring.png"], descripcion: "" },
    { id: 26, slug: "soldevilla", categoria: "Brands", imagenPortada: "/assets/brands/soldevilla.png", titulo: "Soldevilla", cliente: "—", año: 2026, galeria: ["/assets/brands/soldevilla.png"], descripcion: "" },
    { id: 27, slug: "sensinon", categoria: "Brands", imagenPortada: "/assets/brands/sensinon.png", titulo: "Sensinon", cliente: "—", año: 2026, galeria: ["/assets/brands/sensinon.png"], descripcion: "" },
    { id: 28, slug: "ragel-arquitectos", categoria: "Brands", imagenPortada: "/assets/brands/ragel.png", titulo: "Ragel Arquitectos", cliente: "—", año: 2026, galeria: ["/assets/brands/ragel.png"], descripcion: "" },
    { id: 29, slug: "midmidauto", categoria: "Brands", imagenPortada: "/assets/brands/mma.png", titulo: "MidMidAuto", cliente: "—", año: 2026, galeria: ["/assets/brands/mma.png"], descripcion: "" },
    { id: 30, slug: "loft-cafebar", categoria: "Brands", imagenPortada: "/assets/brands/loft.png", titulo: "Loft Cafebar", cliente: "—", año: 2026, galeria: ["/assets/brands/loft.png"], descripcion: "" },
    { id: 31, slug: "lawyers-accountants", categoria: "Brands", imagenPortada: "/assets/brands/lawyers.png", titulo: "Lawyers & Accountants", cliente: "—", año: 2026, galeria: ["/assets/brands/lawyers.png"], descripcion: "" },
    { id: 32, slug: "la-firma-auditores", categoria: "Brands", imagenPortada: "/assets/brands/lafirma.png", titulo: "La Firma Auditores", cliente: "—", año: 2026, galeria: ["/assets/brands/lafirma.png"], descripcion: "" },
    { id: 33, slug: "hotel-laboutique", categoria: "Brands", imagenPortada: "/assets/brands/hotellb.png", titulo: "Hotel Laboutique", cliente: "—", año: 2026, galeria: ["/assets/brands/hotellb.png"], descripcion: "" },
    { id: 34, slug: "hotel-cordoba-centro", categoria: "Brands", imagenPortada: "/assets/brands/hotelcc.png", titulo: "Hotel Córdoba Centro", cliente: "—", año: 2026, galeria: ["/assets/brands/hotelcc.png"], descripcion: "" },
    { id: 35, slug: "el-submarino", categoria: "Brands", imagenPortada: "/assets/brands/elsubmarino.png", titulo: "El Submarino", cliente: "—", año: 2026, galeria: ["/assets/brands/elsubmarino.png"], descripcion: "" },
    { id: 36, slug: "el-bicho-flamencofusion", categoria: "Brands", imagenPortada: "/assets/brands/elbicho.png", titulo: "El Bicho Flamencofusion", cliente: "—", año: 2026, galeria: ["/assets/brands/elbicho.png"], descripcion: "" },
    { id: 37, slug: "ebraincar", categoria: "Brands", imagenPortada: "/assets/brands/ebraincar.png", titulo: "ebrainCAR", cliente: "—", año: 2026, galeria: ["/assets/brands/ebraincar.png"], descripcion: "" },
    { id: 38, slug: "contractone", categoria: "Brands", imagenPortada: "/assets/brands/contractone.png", titulo: "ContractOne", cliente: "—", año: 2026, galeria: ["/assets/brands/contractone.png"], descripcion: "" },
    { id: 39, slug: "caprice", categoria: "Brands", imagenPortada: "/assets/brands/caprice.png", titulo: "Caprice", cliente: "—", año: 2026, galeria: ["/assets/brands/caprice.png"], descripcion: "" },
    { id: 40, slug: "acolsa", categoria: "Brands", imagenPortada: "/assets/brands/acolsa.png", titulo: "Acolsa", cliente: "—", año: 2026, galeria: ["/assets/brands/acolsa.png"], descripcion: "" },
];

export const getCategoryCounts = () => {
    const counts = { All: projects.length };
    for (const cat of CATEGORIES) {
        counts[cat] = projects.filter((p) => p.categoria === cat).length;
    }
    return counts;
};
