import React from 'react';

const CustomModal = ({ setModal, modal, videoURL }) => {
  return (
    <div
      data-aos={modal ? 'fade-zoom-in' : 'fade-zoom-out'}
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full h-full flex justify-center items-center md:inset-0 h-modal bg-[#000000e6]"
      onClick={() => setModal(false)}
    >
      <iframe
        data-aos={modal ? `zoom-in` : `zoom-out`}
        data-aos-delay="1000"
        id="youtube-393"
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Player for Welcome to Silicon Valley"
        width="960"
        height="540"
        src={`${videoURL}?autoplay=1&amp;controls=1&amp;disablekb=1&amp;playsinline=1&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=https%3A%2F%2Fappline-tailwind.preview.uideck.com%2F&amp;noCookie=true&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fappline-tailwind.preview.uideck.com&amp;widgetid=8`}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
      ></iframe>
    </div>
  );
};

export default CustomModal;
