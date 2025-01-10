import Image from "next/image";

/// COMPONENT FOR ( phone & e-mail )
const ContactInfo = () => (
  <div className="flex gap-x-[1.7rem]">
    <div className="flex items-center gap-x-1">
      <Image
        src="/images/icons/call-icon.png"
        alt="Call-icon"
        width={16}
        height={16}
      />
      <p className="text-white">(225) 555-0118</p>
    </div>
    <div className="flex items-center gap-x-1">
      <Image
        src="/images/icons/mail-icon.png"
        alt="Mail-icon"
        width={16}
        height={16}
      />
      <p className="text-white">michelle.rivera@example.com</p>
    </div>
  </div>
);

// COMPONENTS FOR SOCIAL MEDIA ICONS 
const SocialMediaIcons = () => (
  <div className="flex gap-x-1 items-center">
    <Image
      src="/images/icons/instagram-icon.png"
      alt="Instagram-icon"
      width={25}
      height={25}
    />
    <Image
      src="/images/icons/youtube-icon.png"
      alt="YouTube-icon"
      width={25}
      height={25}
    />
    <Image
      src="/images/icons/facebook-icon.png"
      alt="Facebook-icon"
      width={25}
      height={25}
    />
    <Image
      src="/images/icons/twitter-icon.png"
      alt="Twitter-icon"
      width={25}
      height={25}
    />
  </div>
);

// TOP HEADER COMPNENT FOR DYNAMIC STYLING
const TopHeader = ({ bgClass }: { bgClass?: string }) => {
  return (
    <header
      className={`hidden sm:flex items-center w-full h-10 ${
        bgClass || "bg-[#252B42]"
      }`}
    >
      <div className="container mx-auto font-semibold text-[0.550rem] md:text-[0.9rem] text-lighttextColor">
        <div className="flex justify-around items-center">
          <ContactInfo />
          <p className="text-white">Follow Us and get a chance to win 80% off</p>
          <div className="flex items-center space-x-1">
            <p className="text-white">Follow Us &nbsp; :</p>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;