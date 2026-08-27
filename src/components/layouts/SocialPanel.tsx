import { homeConfig } from "@/packages/configs/home.config";
import { Link } from "../ui";
import Icon from "../ui/icon/Icon";

const SocialPanel = () => {
  const hero = homeConfig.hero;
  return (
    <div className="flex items-center gap-3">
      {hero.social.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-label={item.label}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Icon name={item.icon} className="size-4" />
        </Link>
      ))}
    </div>
  );
};

export default SocialPanel;
