import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/HCSButcher" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/trevor-oduol-901b39281/",
  },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaTwitter />, path: "https://x.com/Trevor_oduol" },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
