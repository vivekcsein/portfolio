import appConfig from "@/packages/configs/app.config";
import FooterNavbar from "../features/navigation/footer/FooterNavbar";
import NavigationLogo from "../ui/images/NavigationLogo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <NavigationLogo width={128} height={128} />
            <p className="site-footer-tagline">{appConfig.app.description}</p>
            {/* <SocialLinks /> */}
          </div>
          <FooterNavbar />
        </div>

        <div className="site-footer-bottom">
          <p className="site-footer-copyright">
            &copy; {year} {appConfig.app.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
