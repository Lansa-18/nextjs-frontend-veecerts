import Image from "next/image";

import iconTwitter from "../../../public/icon_twitter.svg";
import iconGmail from "../../../public/icons-gmail.svg";
import iconLinkedin from "../../../public/linkedin.svg";

export default function Footer() {
  const socialLinks = [
    {
      icon: iconTwitter,
      href: "https://x.com/veecerts?t=9ql8-KVYYFpABQa9YOCRbw&s=09",
      label: "Twitter",
    },
    { icon: iconGmail, href: "mailto:veecerts@gmail.com", label: "Mail" },
    {
      icon: iconLinkedin,
      href: "https://www.linkedin.com/in/veecerts-solution-9b638531b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="socials" className="bg-blue w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-white mb-8">
          {/* Logo */}
          <div className="mb-6 lg:mb-0 cursor-pointer" onClick={scrollToTop}>
            <Image
              src="/Logo Container.svg"
              width={190}
              height={57}
              alt="Logo"
              className="w-auto h-auto max-w-[190px]"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full bg-white opacity-50 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-white space-y-6 lg:space-y-0">
          {/* Copyright Text */}
          <div className="text-center lg:text-left text-sm lg:text-base">
            Veecerts © 2025. All rights reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2 text-gray-white hover:text-blue-400 transition-colors group"
                  title={social.label}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={22}
                    height={22}
                  />

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.label}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
