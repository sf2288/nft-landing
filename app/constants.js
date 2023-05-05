import CollectionIcon from './components/SvgComponents/CollectionIcon';
import PictureIcon from './components/SvgComponents/PictureIcon';
import WalletIcon from './components/SvgComponents/WalletIcon';
import ShoppingBagIcon from './components/SvgComponents/ShoppingBagIcon';
import product1 from '../public/product1.png';
import user1 from '../public/user1.png';
import product2 from '../public/product2.png';
import user2 from '../public/user2.png';
import product3 from '../public/product3.png';
import user3 from '../public/user3.png';
import collection1 from '../public/collection1.png';
import collection2 from '../public/collection2.png';
import collection3 from '../public/collection3.png';
import collection4 from '../public/collection4.png';
import collection5 from '../public/collection5.png';
import collection6 from '../public/collection6.png';
import collection7 from '../public/collection7.png';
import collection8 from '../public/collection8.png';
import artist1 from '../public/artist1.png';
import artist2 from '../public/artist2.png';
import artist3 from '../public/artist3.png';
import artist4 from '../public/artist4.png';
import artist5 from '../public/artist5.png';
import artist6 from '../public/artist6.png';
import artist7 from '../public/artist7.png';
import artist8 from '../public/artist8.png';

export const infoData = [
  {
    icon: <WalletIcon />,
    title: 'Set up your wallet',
    info: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.',
  },
  {
    icon: <CollectionIcon />,
    title: 'Create your collection',
    info: 'Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.',
  },
  {
    icon: <PictureIcon />,
    title: 'Add your NFTs',
    info: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.',
  },
  {
    icon: <ShoppingBagIcon />,
    title: 'List them for sale',
    info: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!',
  },
];

export const productData = [
  {
    product: product1,
    user: user1,
    username: 'ZombieClub Token',
    creater: 'ZombieLab',
    details:
      'Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is unique and resides on the Ethereum blockchain. Your Zombie Lab Club NFT will double as your club membership.',
  },
  {
    product: product2,
    user: user2,
    username: 'Meta Bounty Hunters',
    creater: 'B30898',
    details:
      'Meta Bounty Hunters is a first of its kind  community and collective of elite members who share a community-first mindset and are focused on giving back to its NFT holders through the Reflection Rewards.',
  },
  {
    product: product3,
    user: user3,
    username: 'Treeverse Plots',
    creater: 'Treeverse_Wallet',
    details:
      'Treeverse is an open-world, fantasy MMORPG with a MOBA-style combat system. Slay beasts, forge mighty weapons, lure the biggest fish, form guilds, defeat dungeons.',
  },
];

export const collectionData = [
  {
    image: collection1,
    avatar: artist1,
    title: 'World of Women Galaxy',
    artist: 'Organization Woman',
    price: '0.218 ETH',
  },
  {
    image: collection2,
    avatar: artist2,
    title: 'Azuki #958',
    artist: 'Azuki',
    price: '0.587 ETH',
  },
  {
    image: collection3,
    avatar: artist3,
    title: 'Yolk Folks',
    artist: 'Fufu Prophet',
    price: '1.048 ETH',
  },
  {
    image: collection4,
    avatar: artist4,
    title: 'Earth Mooncake',
    artist: 'Mooncakes',
    price: '2.756 ETH',
  },
];