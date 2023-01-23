import React from 'react';
import classNames from 'classnames';
import SocialMediaCard from '../components/Card/SocialMediaCard';
import Facebook from '../assets/icon-facebook.svg';
import Twitter from '../assets/icon-twitter.svg';
import Instagram from '../assets/icon-instagram.svg';
import YouTube from '../assets/icon-youtube.svg';
import { useGlobalContext } from '../store/context';

const SocialMediaSection = () => {
  const { theme } = useGlobalContext();
  return (
    <section
      className={classNames(
        'relative w-full',
        theme ? 'bg-white' : 'bg-dark-800'
      )}
    >
      <div
        className={classNames(
          'w-full h-11 rounded-b-[20px] absolute top-0 left-0 lg:h-[108px]',
          theme
            ? 'bg-cream-white-800 border-bg-cream-white'
            : 'bg-dark-900 border-dark-900'
        )}
      ></div>
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-y-6 place-items-center md:grid-cols-2 md:gap-x-6 md:place-content-center lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]">
        <SocialMediaCard
          iconImage={Facebook}
          name="@nathanf"
          count="1987"
          countType="followers"
          isIncreasing={true}
          followersCount="12"
          styles="border-blue-800"
        />

        <SocialMediaCard
          iconImage={Twitter}
          name="@nathanf"
          count="1044"
          countType="followers"
          isIncreasing={true}
          followersCount="99"
          styles="border-blue-700"
        />

        <SocialMediaCard
          iconImage={Instagram}
          name="@realnathanf"
          count="11K"
          countType="followers"
          isIncreasing={true}
          followersCount="1099"
          styles="border-[#e95950]"
        />

        <SocialMediaCard
          iconImage={YouTube}
          name="Nathan F."
          count="8239"
          countType="SUBSCRIBERS"
          isIncreasing={false}
          followersCount="144"
          styles="border-red-900"
        />
      </div>
    </section>
  );
};

export default SocialMediaSection;
