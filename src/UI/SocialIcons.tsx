import { SlSocialSpotify } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import Icon from "./Icon";

function SocialIcons() {
  return (
    <article id="social" className="flex gap-5">
      {/* ! add hrefs */}
      <Icon icon={SlSocialSpotify} />
      <Icon icon={SiApplemusic} />
      <Icon icon={SlSocialInstagram} />
      <Icon icon={BsTwitterX} />
      <Icon icon={SiTiktok} />
    </article>
  );
}

export default SocialIcons;
