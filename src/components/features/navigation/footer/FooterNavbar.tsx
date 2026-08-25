import { Link } from "@/components/ui";
import { footerNav } from "@/packages/configs/navigation.config";

const FooterNavbar = () => {
  return (
    <nav className="site-footer-nav" aria-label="Footer">
      {footerNav.map((section) => (
        <div key={section.title} className="site-footer-column">
          <h4 className="site-footer-heading">{section.title}</h4>
          <ul className="site-footer-links">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="site-footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterNavbar;
