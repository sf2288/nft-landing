import { gruppo } from './fonts';
import InfoBlock from './components/InfoBlock';
import SectionTitle from './components/SectionTitle';
import Button from './components/Button';
import ProductBlock from './components/ProductBlock';
import CollectionBlock from './components/CollectionBlock';
import { collectionData, infoData, productData } from './constants';
import VideoSection from './components/VideoSection';

export default function Home() {
  return (
    <main className={`min-h-screen`}>
      <Button variant="outlined">Explore</Button>
      <Button>Create</Button>

      <h1 className={`${gruppo.className} text-4xl`}>
        The world's first non-fungible token (NFT) marketplace for both digital
        and physical assets.
      </h1>

      <CollectionBlock data={collectionData} />

      <ProductBlock data={productData} />

      <SectionTitle title="Hidden Gems" />

      <SectionTitle title="Top collections" />

      <InfoBlock data={infoData} />

      <VideoSection />
    </main>
  );
}
