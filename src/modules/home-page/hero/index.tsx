import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <article className="grid grid-cols-12 relative mb-36 h-[800px] lg:h-auto">
      {/**TODO: for mobile responsive */}
      <section className="absolute px-4 top-36 block lg:hidden">
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

      {/**TODO: for Desktop*/}
      <div className="absolute top-32 hidden lg:block">
        <div className="w-[115px] h-[147px]">
          <Image
            fill
            src="/images/Mask group (1).png"
            alt="xyz"
            className=" absolute w-full h-full"
          />
        </div>
      </div>
      <div className="absolute top-60 right-0 hidden lg:block">
        <div className="w-[115px] h-[148px] relative"></div>
        <Image
          src="/images/Mask group.png"
          alt="xyz"
          fill
          className="absolute w-full h-full"
        />
      </div>

      <div className="absolute top-20 right-24 hidden lg:block">
        <div className="w-[775px] h-[778px] relative">
          <Image
            src="/images/Image.png"
            alt="xyz"
            fill
            className="w-full h-full absolute"
          />
        </div>
      </div>
      <section className="col-span-8 bg-lightBackground pt-28 pl-[120px]">
        {/**TODO: for desktop */}
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
            <Image
              src="/images/Group (2).png"
              width={139}
              height={40}
              alt="app"
            />
            <Image
              src="/images/googleplay.png"
              width={139}
              height={40}
              alt="app"
            />
          </div>
        </section>
      </section>

      <section className="col-span-4 bg-success pt-28 pr-[120px]" />
    </article>
  );
};
