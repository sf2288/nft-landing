import React from 'react';
import CustomImage from '../CustomImage';
import PlayIcon from '../SvgComponents/PlayIcon';
import Button from '../Button';
import { gruppo } from '../../fonts';

export default function HeroBlock() {
  return (
    <div className="h-[calc(100vh-80px)] relative flex flex-col justify-evenly container">
      <div className="z-10">
        <p className="text-gray-500">
          Exclusive NFT for Digital and Real-world Assets
        </p>
        <h1 className={`${gruppo.className} text-4xl mb-20 mt-4`}>
          The world's first non-fungible token (NFT) marketplace for both
          digital and physical assets.
        </h1>
        <div className="flex space-x-3">
          <Button variant="outlined">Explore</Button>
          <Button>Create</Button>
        </div>
      </div>
      <div className="flex items-center">
        <PlayIcon className="w-5 h-5 mr-3" />
        <p>Learn more about TheFund</p>
      </div>
    </div>
  );
}
