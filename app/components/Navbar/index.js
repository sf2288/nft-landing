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
import WalletGradientIcon from '../SvgComponents/WalletGradientIcon';
import themeSwitch from '../../../public/theme-switch.png';
import { useTheme } from 'next-themes';

const SearchBar = (props) => (
  <div class="flex items-center" {...props}>
    <label for="simple-search" class="sr-only">
      Search
    </label>
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 flex items-center py-3 px-9 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="text"
        id="simple-search"
        class="w-80 xl:w-96  min-w-40 gradient_border text-gray-900 text-xs rounded-lg block pl-20 py-4 outline-none"
        placeholder="Search items, collections, and accounts"
        required
      />
    </div>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const { theme, setTheme } = useTheme();

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
      className={` sticky top-0 text-base w-full z-50 ${
        ifScrolling
          ? 'transition-all ease-linear duration-100 bg-[#ffffff1f] backdrop-blur-xl drop-shadow-sm'
          : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex h-[80px] items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={navbarToggle}
            >
              <span class="sr-only">Open mobile menu</span>
              <div className="text-base text-custom-blue dark:text-white">
                <Hamburger className="h-6 w-6" />
              </div>
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
              } basis-full grow lg:flex justify-end`}
            >
              <div
                class={`${
                  open ? 'mt-60 bg-black' : ''
                } space-y-4 lg:space-y-0 flex flex-col lg:flex-row lg:items-center items-center sm:justify-end space-x-2 xl:space-x-10`}
              >
                <div className="hidden lg:block xl:mr-8">
                  <SearchBar className="" />
                </div>
                {(navbarLinks || []).map((item, index) => (
                  <div key={index} className="text-sm">
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
                          <Button
                            className="px-5 !py-1.5 !text-sm font-bold"
                            variant="outlined"
                          >
                            {item?.name}
                          </Button>
                        </CustomLink>
                      ) : item?.url == '/connect-wallet' ? (
                        <div className="hidden lg:block">
                          <CustomLink href={item?.url}>
                            <div className="flex justify-center items-center">
                              <Button
                                className="flex items-center px-6 !py-1.5 !text-sm font-bold"
                                onClick={navbarToggle}
                              >
                                <WalletIcon className="w-5 h-5 mr-2" />
                                {item?.name}
                              </Button>
                            </div>
                          </CustomLink>
                        </div>
                      ) : item?.url ? (
                        <li
                          onClick={navbarToggle}
                          key={item?.name}
                          className={`block px-3 rounded lg:bg-transparent font-bold`}
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
              <div class="flex items-center gap-x-4">
                <SearchIcon  />
                <WalletGradientIcon className="w-6 h-6" />
                <CustomImage
                  src={themeSwitch}
                  width={22}
                  height={22}
                  alt="themeSwitch"
                  className="cursor-pointer lg:hidden block"
                  onClick={() =>
                    theme == 'dark' ? setTheme('light') : setTheme('dark')
                  }
                />
              </div>
            </div>
            <div className="ml-2 items-center hidden lg:flex">
              <CustomImage
                src={themeSwitch}
                width={22}
                height={22}
                alt="themeSwitch"
                className="cursor-pointer"
                onClick={() =>
                  theme == 'dark' ? setTheme('light') : setTheme('dark')
                }
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
