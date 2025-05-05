import type { IconType } from "react-icons";

type IconProps = {
  icon: IconType;
  href: string;
  onClick: (link: string) => void;
};

function Icon({ icon: IconComponent, href }: IconProps) {
  const handleClickLink = (link: string) => {
    window.open(link);
  };

  return (
    <IconComponent
      onClick={() => handleClickLink(href)}
      className="transition duration-200 hover:scale-110 hover:cursor-pointer hover:contrast-125"
    />
  );
}

export default Icon;
