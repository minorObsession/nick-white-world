import { SlSocialSpotify } from "react-icons/sl";
import { FaShopify } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SiTiktok } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import { SiX } from "react-icons/si";
import Icon from "./Icon";

// add twitter + social icons
// maybe rethink styles / position

function SocialIcons() {
  return (
    <article id="social" className="flex h-10 items-center gap-6">
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
        shadowColor="rgba(228,64,95,1)"
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
      <Icon
        enlarge
        icon={FaShopify}
        color="text-[#96bf48]"
        shadowColor="rgb(150, 191, 72, 0.3)"
        onClick={() => {
          window.open("https://jwchzm-he.myshopify.com", "_blank");
        }}
      />
      <Icon
        icon={SlSocialYoutube}
        color="text-[#FF0000]"
        shadowColor="rgba(255,0,0,1)"
        onClick={() => {
          window.open(
            "https://www.youtube.com/channel/UCX_Kq6VrxkABsiQXys8oVFw",
            "_blank"
          );
        }}
      />
      <Icon
        icon={SiX}
        color="text-[#ffffff]"
        shadowColor="rgba(255,255,255,0.6)"
        onClick={() => {
          window.open("https://x.com/nickwhiteworld", "_blank");
        }}
      />
    </article>
  );
}

export default SocialIcons;
