import React from 'react';
import CustomImage from '../CustomImage';
import blueTick from '../../../public/blueTick.png';

export default function CollectionBlock({ data }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex items-center justify-center md:justify-between flex-wrap">
          {(data || []).map((i) => (
            <div class="md:w-1/2 lg:w-1/4 flex flex-col gradient_border overflow-hidden max-w-[326px] my-4">
              <CustomImage
                className="w-full sm:h-full h-[222px]"
                src={i?.image}
                alt="product"
              />
              <div className="p-4 pt-0 first-letter:black_bg rounded-b-[17px]">
                <div className="flex items-center py-5 px-4">
                  <CustomImage
                    src={i?.avatar}
                    alt="avatar"
                    width={35}
                    height={35}
                  />
                  <div className="ml-2">
                    <h2 class="text-gray-900 dark:text-white text-lg title-font font-medium text-truncate-1">
                      {i?.title}
                    </h2>
                    <small class="text-[10px] flex items-center  dark:text-white">
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
                <div className="gradient_line"></div>
                <div className="py-2 px-4">
                  <small class="dark:text-white text-[10px]">Price</small>
                  <p class="dark:text-white">{i?.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
