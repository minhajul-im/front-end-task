import React from "react";
import { RandomLeaf } from "./random-leaf";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <article className="grid grid-cols-12 relative mb-36 h-[800px] lg:h-auto">
      <RandomLeaf />

      <Mobile />

      <section className="col-span-8 bg-lightBackground pt-28 pl-[120px]">
        <DesktopHero />
      </section>

      <section className="col-span-4 bg-success pt-28 pr-[120px]" />
    </article>
  );
};

const DesktopHero = () => {
  return (
    <section className="hidden lg:block">
      <h5 className="text-xl font-bold text-success inline py-1 px-2 bg-lightBackground rounded-md">
        Welcome to Fresh Harvest
      </h5>
      <h1 className="text-[80px] font-extrabold max-w-2xl text-headingText my-4">
        Fresh Fruits and Vegetables
      </h1>
      <p className="text-base text-normalText max-w-xl">
        At Fresh Harvests, we are passionate about providing you with the
        freshest and most flavorful fruits and vegetables
      </p>
      <Button size="lg" className="mt-8 block">
        Shop Now
      </Button>
      <div className="flex gap-3">
        <div>
          <Image
            src="/images/Clip path group.png"
            width={57}
            height={38}
            alt="hey"
            className="inline-block ml-36"
          />
          <div />
        </div>
        <Image
          className="inline-block ml-8"
          src="/images/Special Offer.png"
          width={331}
          height={157}
          alt="hey"
        />
      </div>
      <p className="text-base text-normalText mt-6 mb-3">Download App:</p>
      <div className="flex gap-4 pb-16">
        <Image src="/images/Group (2).png" width={139} height={40} alt="app" />
        <Image src="/images/googleplay.png" width={139} height={40} alt="app" />
      </div>
    </section>
  );
};

const Mobile = () => {
  return (
    <section className="absolute z-10 px-4 top-36 block lg:hidden">
      <h5 className="text-xl font-bold text-success inline py-1 px-2 bg-gray-200 rounded-md">
        Welcome to Fresh Harvest
      </h5>
      <h1 className="text-[48px] font-extrabold max-w-2xl text-headingText my-4">
        Fresh Fruits and Vegetables
      </h1>
      <p className="text-base text-normalText max-w-xl">
        At Fresh Harvests, we are passionate about providing you with the
        freshest and most flavorful fruits and vegetables
      </p>
      <div className="flex justify-between">
        <div>
          <Button size="lg" className="mt-8 block">
            Shop Now
          </Button>
          <Image
            className="inline-block ml-4 mt-6"
            src="/images/Special Offer.png"
            width={191}
            height={91}
            alt="hey"
          />
        </div>
        <div className="">
          <Image
            width={200}
            height={400}
            alt="hello"
            src={"/images/Image.png"}
            className=""
          />
        </div>
      </div>
    </section>
  );
};
