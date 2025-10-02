// ---- CONFIG ----
export const FEED_URL = "https://script.google.com/macros/s/AKfycbzN-q4jU7a2nY6dLasJZixTfaaimSrPxbZ-PZyAJjboaFw2y5Qs4oBq8LRYfUrJF_nB/exec"; // e.g. https://script.google.com/macros/s/xxx/exec
const DEFAULT_SLUG = "/project-details2/project-details2-dark";


export function toSlides(items = []) {
  return items.map((f, i) => ({
    id: f.id || i,
    title: "",
    secTex: "",
    image: f.url,     // or f.thumb for smaller images
    slug: DEFAULT_SLUG,
  }));
}

export function useDriveSlides(pollMs = null) {
  const React = require("react");
  const { useEffect, useRef, useState } = React;

  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const signatureRef = useRef("");

  useEffect(() => {
    let alive = true;               // guards setState
    const controller = new AbortController();
    let timer = null;

    const fetchAndMaybeUpdate = async () => {
      try {
        const res = await fetch(`${FEED_URL}?t=${Date.now()}`, {
          cache: "no-store",
          signal: controller.signal,
        });
        const data = await res.json();
        const items = Array.isArray(data.items) ? data.items : [];
        const sig = items.map(i => `${i.id}:${i.modifiedTime || ""}`).join("|");

        if (alive && sig !== signatureRef.current) {
          signatureRef.current = sig;
          setSlides(toSlides(items));
        }
      } catch (e) {
        if (alive && e.name !== "AbortError") {
          setError(e?.message || "Failed to load slides");
        }
      } finally {
        if (alive) setLoading(false);
      }
    };

    fetchAndMaybeUpdate();
    if (pollMs && pollMs > 0) {
      timer = setInterval(fetchAndMaybeUpdate, pollMs);
    }

    // cleanup: stops fetch + polling and prevents setState after unmount
    return () => {
      alive = false;
      controller.abort();
      if (timer) clearInterval(timer);
    };
  }, [pollMs]);

  return { slides, loading, error };
}
