export default function InfoBlock({ data }) {
  return (
    <section class="text-gray-600 body-font px-5 py-[76px] mx-auto mt-16 mb-32">
      <div class="container ">
        <h2 className="text-custom-blue dark:text-white ext-3xl sm:text-4xl mb-24">Create and sell your NFTs</h2>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {(data || []).map((i) => (
            <div class="p-4 md:w-1/2 lg:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                {i?.icon}
              </div>
              <div class="flex-grow">
                <h2 class="text-custom-blue dark:text-white text-lg title-font font-medium mb-3">
                  {i?.title}
                </h2>
                <p class="leading-relaxed text-base text-custom-blue dark:text-white">{i?.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
