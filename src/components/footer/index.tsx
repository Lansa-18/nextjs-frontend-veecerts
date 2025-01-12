import Image from 'next/image';

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "" },
    { name: "Pricing", path: "" },
    { name: "Developers", path: "" },
  ];

  return (
    <div className="bg-blue p-6 lg:p-12">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-white mb-8">
        {/* Logo */}
        <div className="mb-6 lg:mb-0">
          <Image src="/Logo Container.svg" width={190.33} height={57} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 lg:gap-8">
          {navLinks.map((link, index) => (
            <div key={index}>
              <span className="text-white hover:text-gray-300 transition-colors cursor-pointer">
                {link.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full bg-white opacity-50 mb-8" />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-white space-y-6 lg:space-y-0">
        {/* Copyright Text */}
        <div className="text-center lg:text-left">
          Veecerts © 2025. All rights reserved.
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <Image src="/youtube.svg" width={24} height={24} alt="YouTube" />
          <Image src="/facebook.svg" width={24} height={24} alt="Facebook" />
          <Image src="/twitter.svg" width={24} height={24} alt="Twitter" />
          <Image src="/instagram.svg" width={24} height={24} alt="Instagram" />
          <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
}
