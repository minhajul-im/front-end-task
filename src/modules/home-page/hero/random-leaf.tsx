import React from "react";

import { FrameImage } from "@/components/common/frame-image";

export const RandomLeaf = () => {
  return (
    <React.Fragment>
      <div className="absolute top-32">
        <FrameImage
          src="/images/Mask group (1).png"
          width="115px"
          height="148px"
        />
      </div>
      <div className="absolute top-60 right-0">
        <FrameImage src="/images/Mask group.png" width="115px" height="148px" />
      </div>
      <div className="absolute top-20 right-24">
        <FrameImage src="/images/Image.png" width="775px" height="778px" />
      </div>
    </React.Fragment>
  );
};
