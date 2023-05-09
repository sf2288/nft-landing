import React from 'react';
import CustomLink from '../CustomLink';
import CustomImage from '../CustomImage';
import Button from '../Button';
import { socials } from '@/app/constants';

export default function Footer() {
  return (
    <footer class="text-gray-600 body-font px-5">
      <div className="container flex flex-wrap">
        <div className="w-full lg:w-2/5">
          <div class="w-64 flex-shrink-0 flex flex-col md:items-start items-center md:mx-0 mx-auto text-center md:text-left">
            <CustomLink href="/">
              <CustomImage
                src="/nft_logo.svg"
                width={73}
                height={100}
                alt="nft_logo"
              />
            </CustomLink>
            <p class="my-2 text-sm dark:text-white uppercase font-bold">
              TheFund
            </p>
            <p className="text-sm not-italic leading-5 text-justify font-[350]">
              TheFund is the world's first non-fungible token (NFT) marketplace
              for both digital and physical assets
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-full lg:w-3/5 my-10">
          <div className="flex flex-wrap w-full lg:w-2/3 mb-10">
            <div class="w-1/3 space-y-[14px]">
              <h2 class="gradient_text mb-3 font-bold text-sm leading-5">
                Company
              </h2>
              <nav class="list-none mb-10 space-y-[14px]">
                <li>
                  <a class="text-sm leading-5 font-[350]">About</a>
                </li>
                <li>
                  <a class="text-sm leading-5 font-[350]">Careers</a>
                </li>
                <li>
                  <a class="text-sm leading-5 font-[350]">Ventures</a>
                </li>
                <li>
                  <a class="text-sm leading-5 font-[350]">Grants</a>
                </li>
              </nav>
            </div>
            <div class="w-1/3 space-y-[14px]">
              <h2 class="gradient_text mb-3 font-bold text-sm leading-5">
                Stats
              </h2>
              <nav class="list-none mb-10 space-y-[14px]">
                <li>
                  <a class="text-sm leading-5 font-[350]">Rankings</a>
                </li>
                <li>
                  <a class="text-sm leading-5 font-[350]">Activity</a>
                </li>
              </nav>
            </div>
            <div class="w-1/3  space-y-[14px]">
              <h2 class="gradient_text mb-3 font-bold text-sm leading-5">
                Resources
              </h2>
              <nav class="list-none mb-10  space-y-[14px]">
                <li>
                  <a class="text-sm leading-5 font-[350]">Help Center</a>
                </li>
                <li>
                  <a class="text-sm leading-5 font-[350]">
                    Gas-Free Marketplace
                  </a>
                </li>
                <li>
                  <a class="text-sm leading-5 font-[350]">Blog</a>
                </li>
                <li>
                  <a class="text-sm leading-5 font-[350]">Newsletter</a>
                </li>
              </nav>
            </div>
          </div>
          <div class="w-full lg:w-1/3 space-y-[14px]">
            <h2 class="gradient_text mb-3 font-bold text-sm leading-5">
              Follow us on
            </h2>
            <nav class="grid grid-rows-2 grid-flow-col gap-y-6">
              {(socials || []).map((i) => (
                <div className="footer_gradient_border p-3 flex w-[55px] h-[55px] justify-center items-center">
                  <CustomImage src={i} width={40} height={40} alt="nft_logo" />
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
