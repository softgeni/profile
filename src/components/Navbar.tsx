import { SOCIALINKS } from "../constants/icons";
import { logo } from "../constants/img";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} width={150} alt={logo} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {SOCIALINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:scale-110 transition-transform"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};
