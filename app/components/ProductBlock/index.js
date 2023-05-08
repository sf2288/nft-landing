import React from 'react';
import CustomImage from '../CustomImage';
import SectionTitle from '../SectionTitle';

export default function ProductBlock({ data }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-32 mx-auto space-y-6">
        <SectionTitle title="Hidden Gems" />
        <div class="grid gap-x-4 xl:gap-x-32 gap-y-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-stretch">
          {(data || []).map((i) => (
            <div class="max-w-[321px] pt-[11px] p-6 gradient_border h-[525px] mx-auto">
              <div className="relative mb-4">
                <CustomImage
                  class=""
                  src={i?.product}
                  alt="product"
                  width={287}
                  height={287}
                />
                <CustomImage
                  class="ml-[40%] mt-[-27px]"
                  src={i?.user}
                  width={54}
                  height={54}
                  alt="user"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 class="text-base text-gray-900 dark:text-white font-medium title-font">
                  {i?.username}
                </h2>
                <h3 class="text-indigo-500 dark:text-white text-sm font-medium mb-4">
                  Create by <span className="gradient_text">{i?.creater}</span>
                </h3>
              </div>
              <p class="leading-relaxed text-sm dark:text-white font-normal">
                {i?.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
