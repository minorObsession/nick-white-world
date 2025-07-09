import { SlSocialSpotify } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SiTiktok } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import Icon from "./Icon";

// add twitter + social icons
// maybe rethink styles / position

function SocialIcons() {
  return (
    <article id="social" className="flex gap-6 items-center">
      {/* ! add hrefs */}
      <Icon
        icon={SlSocialSpotify}
        color="text-[#1DB954]"
        shadowColor="rgba(29,185,84,0.6)"
        onClick={() => {
          window.open(
            "https://open.spotify.com/artist/1sHSs2cvS68cPuiItKnwIB",
            "_blank"
          );
        }}
      />
      <Icon
        icon={SiApplemusic}
        color="text-[#FA243C]"
        shadowColor="rgba(250,36,60,0.6)"
        onClick={() => {
          window.open(
            "https://music.apple.com/us/artist/nick-white/1188784490"
          );
        }}
      />
      <Icon
        icon={SlSocialInstagram}
        color="text-[#E4405F]"
        shadowColor="rgba(228,64,95,0.6)"
        onClick={() => {
          window.open("https://www.instagram.com/nickwhiteworld", "_blank");
        }}
      />
      <Icon
        icon={SiTiktok}
        color="text-[#ffffff]"
        shadowColor="rgba(255,255,255,0.6)"
        onClick={() => {
          window.open("https://www.tiktok.com/@nickwhiteworld", "_blank");
        }}
      />
    </article>
  );
}

export default SocialIcons;
