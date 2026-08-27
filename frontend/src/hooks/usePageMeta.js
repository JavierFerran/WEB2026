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

export const usePageMeta = (title, description) => {
    useEffect(() => {
        document.title = title;
        setMeta("name", "description", description);
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);
    }, [title, description]);
};
