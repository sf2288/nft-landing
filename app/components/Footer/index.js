import React from 'react';
import CustomLink from '../CustomLink';
import CustomImage from '../CustomImage';
import Button from '../Button';
import { socials } from '@/app/constants';

export default function Footer() {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <CustomLink
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <CustomImage
              src="/nft_logo.svg"
              width={73}
              height={100}
              alt="nft_logo"
            />
          </CustomLink>
          <p class="mt-2 text-sm dark:text-white uppercase">TheFund</p>
          <p>
            TheFund is the world's first non-fungible token (NFT) marketplace
            for both digital and physical assets
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium  gradient_text tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Ventures</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Grants</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium gradient_text tracking-widest text-sm mb-3">
              Stats
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Rankings</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Activity</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium gradient_text tracking-widest text-sm mb-3">
              Resources
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Help Center</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">
                  Gas-Free Marketplace
                </a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Newsletter</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium gradient_text tracking-widest text-sm mb-3">
              Follow us on
            </h2>
            <nav class="list-none mb-10 flex flex-wrap">
              {(socials || []).map((i) => (
                <Button variant="outlined" className='w-6 h-6 m-[14px]'>
                  <CustomImage src={i} width={30} height={30} alt="nft_logo" />
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
