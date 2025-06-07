import type { IconType } from "react-icons";

type IconProps = {
  icon: IconType;
  onClick: () => void;
  color?: string;
  shadowColor?: string;
};

function Icon({
  icon: IconComponent,
  onClick,
  color = "text-neon-green",
  shadowColor = "rgba(57,255,20,0.6)",
}: IconProps) {
  const shadowStyle = {
    "--shadow-color": shadowColor,
  } as React.CSSProperties;

  return (
    <IconComponent
      onClick={onClick}
      style={shadowStyle}
      className={`transition hover:scale-120 hover:cursor-pointer hover:brightness-150 text-3xl ${color} hover:drop-shadow-[6px_6px_10px_var(--shadow-color)]`}
    />
  );
}

export default Icon;
