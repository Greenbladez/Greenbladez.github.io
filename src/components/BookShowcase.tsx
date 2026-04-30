export default function BookShowcase() {
  return (
    <section className="book-showcase">
      <div className="book-inner">
        <div className="book-cover" aria-hidden>
          <img src="/imgs/cover-book.jpg" alt="Book Cover" className="cover-placeholder"></img>
        </div>

        <div className="book-themes">
          <h2>The Book</h2>
          <ul className="themes">
            <li>Fantasy</li>
            <li>Romance</li>
            <li>Drama</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
