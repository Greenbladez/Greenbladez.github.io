import "./App.css";
import BookShowcase from "./components/BookShowcase";
import ActionDetail from "./components/ActionDetail";
import AuthorBio from "./components/AuthorBio";
import LinksList from "./components/LinksList";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <>
      <div className="mobile-fixed-bg"></div>
      <div className="site-root">
        <header className="site-header">
          <h1>Bloomborn și Războiul Sufletelor de Sticlă</h1>
          <p className="tagline">Mică introducere într-un univers magic...</p>
        </header>

        <main className="site-main">
          <BookShowcase />
          <ActionDetail />
          <AuthorBio />
          <LinksList />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default App;
