import type { IconType } from "react-icons";

type IconProps = {
  icon: IconType;
  onClick: () => void;
  color?: string;
  shadowColor?: string;
  enlarge?: boolean;
};

function Icon({
  icon: IconComponent,
  onClick,
  color = "text-primary",
  shadowColor = "rgba(57,255,20,0.6)",
  enlarge
}: IconProps) {
  const shadowStyle = {
    "--shadow-color": shadowColor,
  } as React.CSSProperties;

  return (
    <IconComponent
      onClick={onClick}
      style={shadowStyle}
      className={`transition ${enlarge && 'scale-125'} ${enlarge ?'hover:scale-140' :'hover:scale-115'} hover:cursor-pointer hover:brightness-130 text-3xl ${color} hover:drop-shadow-[1px_4px_10px_var(--shadow-color)]`}
    />
  );
}

export default Icon;
