import React from 'react';
import CustomImage from '../CustomImage/indes';

export default function ProductBlock({ data }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex items-center justify-center md:justify-between flex-wrap">
          {(data || []).map((i) => (
            <div class="w-[320px] py-4">
              <div class="pt-[11px] p-6 gradient_border h-[525px]">
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
                    Create by{' '}
                    <span className="gradient_text">{i?.creater}</span>
                  </h3>
                </div>
                <p class="leading-relaxed text-sm dark:text-white font-normal">
                  {i?.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
