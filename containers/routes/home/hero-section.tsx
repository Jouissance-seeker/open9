import { ArrowUp } from "iconsax-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container relative flex flex-col gap-8 items-center">
      <p className="font-bold text-4xl lg:text-5xl mt-6 lg:mt-14">World of top works</p>
      <p className="max-w-xl text-center lg:text-lg text-white/60 font-medium">
        Welcome to the world of rare digital art. Explore the best art from
        hand-picked digital artist out there and find the hidden gem.
      </p>
      <div className="flex gap-4">
        <button className="bg-citron transition-all hover:bg-white text-black py-2.5 px-4 items-center flex gap-2 rounded-xl font-bold">
          <p className="text-smp">Discover More</p>
          <ArrowUp size="24" color="#000" className="rotate-45" />
        </button>
        <button className="bg-white transition-all hover:bg-citron text-black py-2.5 px-4 items-center flex gap-2 rounded-xl font-bold">
          <p className="text-smp">All Collections</p>
          <ArrowUp size="24" color="#000" className="rotate-45" />
        </button>
      </div>
      <div className="hidden lg:block">
        <Image src={'/images/butterfly.png'} alt="butterfly" width={25} height={25} className="animate-spin absolute left-40 top-48" />
        <Image src={'/images/btc-coin.png'} alt="btc-coin" width={60} height={60} className="animate-bounce absolute left-14 top-24" />
        <Image src={'/images/star.png'} alt="star" width={25} height={25} className="animate-pulse absolute right-48 top-38" />
        <Image src={'/images/star.png'} alt="star" width={35} height={35} className="animate-pulse absolute right-24 top-14" />
        <Image src={'/images/eth-coin.png'} alt="etc-coint" width={60} height={60} className="animate-bounce absolute right-24 top-62" />
      </div>
    </section>
  );
};
