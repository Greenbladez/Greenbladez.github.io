import { useEffect, useState } from "react";

export default function LinksList() {
  const [hoverLabel, setHoverLabel] = useState("Link-uri utile");

  useEffect(() => {
    const container = document.querySelector(".links-list .links"); // Updated selector to target the correct container
    if (!container) return;
    const anchors = Array.from(container.querySelectorAll("a"));

    const onEnter = (e: Event) => {
      const img = (e.currentTarget as HTMLElement).querySelector("img");
      setHoverLabel(img?.getAttribute("alt") ?? "Link-uri utile");
    };

    const onLeave = () => setHoverLabel("Link-uri utile");

    anchors.forEach((a) => {
      a.addEventListener("mouseenter", onEnter);
      a.addEventListener("mouseleave", onLeave);
    });

    return () => {
      anchors.forEach((a) => {
        a.removeEventListener("mouseenter", onEnter);
        a.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <section className="links-list">
      <div className="hover-label">
        <h2>
          {hoverLabel}
        </h2>
      </div>
      <div className="links-container">
        <div className="links">
          <a
            href="https://literaz.ro/carti/daria-blooms/bloomborn-si-razboiul-sufletelor-de-sticla-vol1/9786060299356"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/imgs/logo-creator.jpg" alt="Cumpără cartea" />
          </a>
          <a
            href="https://www.goodreads.com/book/show/244421133-bloomborn-si-razboiul-sufletelor-de-sticla-vol-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/imgs/goodreads.png" alt="Goodreads" />
          </a>
          <a
            href="https://www.instagram.com/author.daria.blooms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/imgs/instagram.webp" alt="Instagram" />
          </a>
        </div>
        <div className="image-container">
          <img src="/imgs/angi-x-zack.jpg" alt="Angi and Zack" />
        </div>
      </div>
    </section>
  );
}
