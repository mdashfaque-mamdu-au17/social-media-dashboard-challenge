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
        'relative w-full pb-[938px]',
        theme ? 'bg-white' : 'bg-dark-800'
      )}
    >
      <div className="mx-auto px-6 flex flex-col gap-6 absolute -top-11 left-1/2 transform -translate-x-1/2">
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
