'use client';
import { videoURL } from '@/app/constants';
import { useState } from 'react';
import Button from '../Button';
import CustomModal from '../CustomModal';
import thumbnail from '../../../public/thumbnail.png';
import CustomImage from '../CustomImage';
import PlayIcon from '../SvgComponents/PlayIcon';
import blueDot from '../../../public/blue_dot.svg';
import greenDot from '../../../public/green_dot.svg';

export default function VideoSection() {
  const [modal, setModal] = useState(false);
  return (
    <div className="py-32 px-5 text-center flex flex-col justify-center items-center relative">
      <h2 className="text-3xl sm:text-4xl text-custom-blue dark:text-white">
        Discover the latest #TOPNFT
      </h2>
      <p className="text-xl gradient_text mt-2">
        The NFT marketplace with everything for everyone
      </p>
      {modal ? (
        <CustomModal setModal={setModal} modal={modal} videoURL={videoURL} />
      ) : null}
      <div
        className="relative my-14 cursor-pointer"
        onClick={() => setModal(!modal)}
      >
        <CustomImage width={994} height={483} src={thumbnail} alt="thumbnail" />
        <div className="absolute w-full h-full bg-[#00000080] inset-0"></div>
        <PlayIcon className="text-custom-blue dark:text-white z-30 w-14 h-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Button className="w-auto px-8 !py-[14px] text-custom-blue dark:text-white">
        Explore the marketplace
      </Button>
    </div>
  );
}
