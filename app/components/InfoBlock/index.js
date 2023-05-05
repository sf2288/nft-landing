'use client';

import React from 'react';

export default function InfoBlock({ data }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {(data || []).map((i) => (
            <div class="p-4 md:w-1/2 lg:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                {i?.icon}
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 dark:text-white text-lg title-font font-medium mb-3">
                  {i?.title}
                </h2>
                <p class="leading-relaxed text-base">{i?.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
