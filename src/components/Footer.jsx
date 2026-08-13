import { contact } from '../data/resume';

const Footer = () => (
  <footer className="footer">
    <div className="wrap footer__inner">
      <span>© {new Date().getFullYear()} Keith L. Baskerville Jr.</span>
      <a href={`tel:${contact.phone.replace(/-/g, '')}`}>{contact.phone}</a>
    </div>
  </footer>
);

export default Footer;
