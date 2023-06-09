import React from 'react';
import PlayIcon from '../SvgComponents/PlayIcon';
import Button from '../Button';
import greenDot from '../../../public/green_dot.svg';
import CustomImage from '../CustomImage';

export default function HeroBlock() {
  return (
    <div className="h-[calc(100vh-80px)] mt-[80px] relative flex flex-col justify-evenly container px-5">
      <CustomImage
        className="rounded-full absolute opacity-50 blur-[254.5px] top-0 left-0 z-[-1]"
        src={greenDot}
        width={888}
        height={888}
        alt="green dot"
      />
      <div className="z-10">
        <p className="text-custom-blue dark:text-white">
          Exclusive NFT for Digital and Real-world Assets
        </p>
        <h1
          className={`text-3xl sm:text-4xl mb-20 mt-4 text-custom-blue dark:text-white`}
        >
          The world's first non-fungible token (NFT) marketplace for both
          digital and physical assets.
        </h1>
        <div className="flex space-x-3">
          <Button variant="outlined">Explore</Button>
          <Button>Create</Button>
        </div>
      </div>
      <div className="flex items-center mt-3">
        <PlayIcon className="w-5 h-5 mr-3 text-custom-blue dark:text-white" />
        <p className="text-custom-blue dark:text-white">
          Learn more about TheFund
        </p>
      </div>
    </div>
  );
}
