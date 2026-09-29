import { useEffect } from "react";

const setMeta = (attr, key, content) => {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
};

const SITE_URL = "https://javierferran.com";

const setCanonical = () => {
    const path = window.location.pathname.replace(/\/+$/, "");
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
    }
    el.setAttribute("href", `${SITE_URL}${path || "/"}`);
};

export const usePageMeta = (title, description) => {
    useEffect(() => {
        document.title = title;
        setCanonical();
        setMeta("name", "description", description);
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);
    }, [title, description]);
};
