export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="contact">
          <strong>Contact</strong>
          <p>
            Pentru clarificări și evenimente: <a href="mailto:author.daria.blooms@gmail.com">author.daria.blooms@gmail.com</a>
          </p>
          <p>
            Contact editură: <a href="mailto:contact@edituracreator.ro">contact@edituracreator.ro</a>
          </p>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} Daria Blooms - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
