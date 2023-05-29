'use client';
import CollectionBlock from './components/CollectionBlock';
import CustomImage from './components/CustomImage';
import HeroBlock from './components/HeroBlock';
import InfoBlock from './components/InfoBlock';
import ProductBlock from './components/ProductBlock';
import VideoSection from './components/VideoSection';
import { collectionData, infoData, productData } from './constants';
import blueDot from '../public/blue_dot.png';
import greenDot from '../public/green_dot.png';
import { useTheme } from 'next-themes';
import hero_image_light from '../public/hero_image_light.png';
import hero_image from '../public/hero_image.png';

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className="relative">
      <CustomImage
        fill={true}
        className="max-w-[770px] !h-[770px] w-full z-[-1] absolute !top-[-0.93%] !right-0 !md:right-[3.82%] !left-0 !md:left-[37.22%] bg-[#73e0a9] opacity-50 blur-[254.5px]"
        src={greenDot}
        alt="green_dot"
      />
      <CustomImage
        fill={true}
        className="max-w-[770px] !h-[770px] w-full z-[-1] absolute !top-[9.91%] !left-0 !md:left-[6.81%] !right-0 !md:right-[23.82%] !bottom-[67.62%] bg-[#5B68DF] opacity-50 blur-[254.5px]"
        src={blueDot}
        alt="blue_dot"
      />
      <CustomImage
        width={770}
        height={770}
        className="max-w-[770px] !h-[770px] w-full z-[-1] absolute !top-[56.58%] !left-0 !md:right-[41.04%] !right-0 !bottom-[24.32%] bg-[#73e0a9] opacity-50 blur-[254.5px]"
        src={greenDot}
        alt="green_dot"
      />
      <CustomImage
        width={770}
        height={770}
        className="max-w-[770px] !h-[770px] w-full z-[-1] absolute !top-[66.72%] !left-0 !md:left-[32.5%] !right-0 !md:right-[-1.88%] !bottom-[10.81%] bg-[#5B68DF] opacity-50 blur-[254.5px]"
        src={blueDot}
        alt="blue_dot"
      />
      <CustomImage
        width={770}
        height={770}
        className="max-w-[770px] !h-[770px] w-full z-[-1] absolute !top-[78.87%] !left-0 !md:right-[-36.81%] !right-0 !bottom-[7.66%] bg-[#5B68DF] opacity-50 blur-[254.5px]"
        src={blueDot}
        alt="blue_dot"
      />
      <CustomImage
        width={770}
        height={770}
        className="max-w-[770px] !h-[770px] w-full z-[-1] absolute !right-[0] !bottom-[0] bg-[#73e0a9] opacity-50 blur-[254.5px]"
        src={greenDot}
        alt="green_dot"
      />
      <div className={`min-h-screen mx-auto`}>
        <HeroBlock />

        <ProductBlock data={productData} />

        <CollectionBlock data={collectionData} />

        <InfoBlock data={infoData} />

        <VideoSection />

        <CustomImage
          width={770}
          height={770}
          className="absolute top-[-140px] right-0 z-0"
          src={theme == 'light' ? hero_image_light : hero_image}
          alt="hero_image"
        />
      </div>
    </main>
  );
}
