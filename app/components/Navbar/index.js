'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Hamburger from '../../components/SvgComponents/Hamburger';
import CustomLink from '../CustomLink';
import { navbarLinks } from '@/app/constants';
import CustomImage from '../CustomImage';
import SearchIcon from '../SvgComponents/SearchIcon';
import WalletIcon from '../SvgComponents/WalletIcon';
import useWindowSize from '../useWindowSize';

const SearchBar = () => (
  <form class="flex items-center">
    <label for="simple-search" class="sr-only">
      Search
    </label>
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="" />
      </div>
      <input
        type="text"
        id="simple-search"
        class="w-80 gradient_border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 "
        placeholder="Search items, collections, and accounts"
        required
      />
    </div>
  </form>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const navbarToggle = () => setOpen(!open);

  useEffect(() => {
    let listener = null;
    listener = document.addEventListener('scroll', () => {
      var scrolled = document.scrollingElement.scrollTop;
      setScrollState(scrolled >= 180);
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  let ifScrolling =
    (scrollState && router.pathname == '/') || router.pathname !== '/' || open;

  const size = useWindowSize();
  useEffect(() => {
    setOpen(open && size > 1023);
  }, [size]);

  return (
    <header
      className={`sticky top-0 text-base w-full z-10 ${
        ifScrolling
          ? 'transition-all ease-linear duration-100 bg-[#ffffff1f] backdrop-blur-xl drop-shadow-sm'
          : ''
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="relative flex h-[80px] items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={navbarToggle}
            >
              <span class="sr-only">Open mobile menu</span>
              <Hamburger />
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
            {!open ? (
              <div class="flex flex-shrink-0 items-center">
                <CustomLink href="/" className="flex items-center">
                  <CustomImage
                    src="/nft_logo.svg"
                    width={36}
                    height={36}
                    alt="nft_logo"
                  />
                </CustomLink>
              </div>
            ) : null}
            <div
              className={`${
                !open ? 'hidden' : ''
              } my-8 lg:my-0 basis-full grow lg:block`}
            >
              <div
                class={`${
                  open ? 'mt-80 bg-black' : ''
                } flex flex-col gap-3 lg:flex-row lg:items-center items-center sm:justify-end `}
              >
                <SearchBar />
                {(navbarLinks || []).map((item, index) => (
                  <div key={index}>
                    <div
                      className={`inline-flex lg:flex justify-start ${
                        item?.url === '/donate' || item?.url === '/admin/login'
                          ? 'border-none'
                          : item?.url == pathname
                          ? 'border-b-2'
                          : null
                      } ${ifScrolling ? 'border-myanpr' : 'border-white'}`}
                    >
                      {item?.url == '/account' ? (
                        <CustomLink href={item?.url}>
                          <Button className="w-40" variant="outlined">
                            {item?.name}
                          </Button>
                        </CustomLink>
                      ) : item?.url == '/connect-wallet' ? (
                        <div className="hidden lg:block">
                          <CustomLink href={item?.url}>
                            <div className="flex justify-center items-center">
                              {/* <WalletIcon /> */}
                              <Button
                                className="w-56 flex items-center"
                                onClick={navbarToggle}
                              >
                                {item?.name}
                              </Button>
                            </div>
                          </CustomLink>
                        </div>
                      ) : item?.url ? (
                        <li
                          onClick={navbarToggle}
                          key={item?.name}
                          className={`block font-medium pt-3 px-3 pb-2 mb-1 rounded lg:bg-transparent`}
                        >
                          <CustomLink
                            href={item?.url}
                            className={`${
                              item?.url === pathname ? 'text-myanpr' : ''
                            } ${
                              ifScrolling
                                ? 'text-gray-700 hover:text-myanpr'
                                : 'text-white'
                            } `}
                          >
                            {item?.name}
                          </CustomLink>
                        </li>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="lg:hidden absolute right-0 flex flex-shrink-0 items-center lg:static">
              <div class="flex items-center gap-x-3">
                <SearchIcon />
                <CustomImage
                  src="/nft_logo.svg"
                  width={24}
                  height={24}
                  alt="nft_logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
