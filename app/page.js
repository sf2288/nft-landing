import CollectionBlock from './components/CollectionBlock';
import CustomImage from './components/CustomImage';
import HeroBlock from './components/HeroBlock';
import InfoBlock from './components/InfoBlock';
import ProductBlock from './components/ProductBlock';
import VideoSection from './components/VideoSection';
import { collectionData, infoData, productData } from './constants';

export default function Home() {
  return (
    <main className="relative">
      <CustomImage
        width={770}
        height={770}
        className="absolute top-[-70px] right-0 z-0"
        src="/hero_image.png"
        alt="hero_image"
      />
      <div className={`min-h-screen mx-auto`}>
        <HeroBlock />

        <ProductBlock data={productData} />

        <CollectionBlock data={collectionData} />

        <InfoBlock data={infoData} />

        <VideoSection />
      </div>
    </main>
  );
}
