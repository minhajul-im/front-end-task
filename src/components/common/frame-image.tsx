import React from "react";
import Image from "next/image";

export const FrameImage = ({
  width,
  height,
  src,
}: {
  src: string;
  width: string;
  height: string;
}) => {
  return (
    <div className={`relative  w-[${width}] h-[${height}]`}>
      <Image src={src} alt={src + ""} className="w-full h-full absolute" fill />
    </div>
  );
};
