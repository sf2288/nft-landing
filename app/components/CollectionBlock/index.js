import React from 'react';
import CustomImage from '../CustomImage';
import blueTick from '../../../public/blueTick.png';
import SectionTitle from '../SectionTitle';
import blueDot from '../../../public/blue_dot.svg';
import greenDot from '../../../public/green_dot.svg';

export default function CollectionBlock({ data }) {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 pt-32 mx-auto space-y-6 z-10">
        <SectionTitle title="Top collections" />
        <div className="z-10 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center md:justify-items-stretch">
          {(data || []).map((i) => (
            <div class="max-w-[286px] md:max-w-full flex flex-col gradient_border overflow-hidden">
              <CustomImage
                className="w-full sm:h-full h-[222px]"
                src={i?.image}
                alt="product"
              />
              <div className="p-4 pt-0 first-letter:bg-custom-blue rounded-b-[17px] ">
                <div className="btn_gradient dark:bg-custom-blue rounded-b-3xl">
                  <div className="flex items-center py-5 px-4 ">
                    <CustomImage
                      src={i?.avatar}
                      alt="avatar"
                      width={35}
                      height={35}
                    />
                    <div className="ml-2">
                      <h2 class="text-custom-blue dark:text-white text-lg title-font font-medium text-truncate-1">
                        {i?.title}
                      </h2>
                      <small class="text-[10px] flex items-center text-custom-blue dark:text-white">
                        By {i?.artist}
                        <CustomImage
                          className="ml-2"
                          src={blueTick}
                          alt="blueTick"
                          width={10}
                          height={10}
                        />
                      </small>
                    </div>
                  </div>
                  <div className="h-[1px] bg-white dark:gradient_line"></div>
                  <div className="py-2 px-5">
                    <small class="text-custom-blue dark:text-white text-[10px]">
                      Price
                    </small>
                    <p class="text-custom-blue dark:text-white">{i?.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CustomImage
          className="rounded-full absolute opacity-50 blur-[254.5px] z-[-1]"
          src={greenDot}
          width={666}
          height={666}
          alt="green dot"
        />
        <CustomImage
          className="rounded-full absolute opacity-50 blur-[254.5px] right-0 bottom-0 z-[-1]"
          src={blueDot}
          width={666}
          height={666}
          alt="blue dot"
        />
      </div>
    </section>
  );
}
