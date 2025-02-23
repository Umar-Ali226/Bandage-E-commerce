import Image from "next/image";
const Team = () => {
  return (
    <section className="mt-24 container mx-auto">
      {/* --- TEXT --- */}
      <div className="flex flex-col justify-center items-center text-center mx-[4.7rem] sm:mx-[0rem] space-y-2">
        <h3 className="font-semibold text-[2.3rem] text-[#252B42]">
          Meet Our Team
        </h3>
        {/* --- FOR MOBILE SCREENS --- */}
        <p className="text-[0.875rem] text-secondtextColor flex sm:hidden">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        {/* --- FOR ( md & lg ) SCREENS --- */}
        <p className="text-[0.875rem] text-secondtextColor hidden sm:flex">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      {/* --- TEAM --- */}
      <div className="flex flex-col sm:flex-row mt-10 sm:mt-24 gap-x-6 justify-center items-center space-y-9 sm:space-y-0">
        {/* --- USERNAME 1 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-1.jpg"}
            alt="username-1"
            width={316}
            height={231}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-#737373">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) SCREENS --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        {/* --- USERNAME 2 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-2.jpg"}
            alt="username-1"
            width={316}
            height={231}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) SCREENS --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden ">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
       {/* --- USERNAME 3 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-3.jpg"}
            alt="username-1"
            width={329}
            height={321}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) SCREENS --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;