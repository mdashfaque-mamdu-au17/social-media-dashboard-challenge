import React from 'react';
import classNames from 'classnames';
import { useGlobalContext } from '../store/context';
import StatusCard from '../components/Card/StatusCard';
import Facebook from '../assets/icon-facebook.svg';
import Instagram from '../assets/icon-instagram.svg';
import Twitter from '../assets/icon-twitter.svg';
import YouTube from '../assets/icon-youtube.svg';

const OverviewSection = () => {
  const { theme } = useGlobalContext();
  return (
    <section className="pt-[46px] pb-[45px] xl:pb-[75px]">
      <div className="max-w-[1110px] mx-auto">
        <div className="px-6 xl:px-0">
          <h4
            className={classNames(
              'text-2xl leading-[29px] font-bold',
              theme ? 'text-gray-800' : 'text-white-900'
            )}
          >
            Overview - Today
          </h4>
        </div>

        <div className="pt-[27px] grid grid-cols-1 gap-y-4 place-items-center md:grid-cols-2 md:gap-x-6 md:place-content-center lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px] xl:pt-6">
          <StatusCard
            title="Page Views"
            icon={Facebook}
            count="87"
            isIncreasing={true}
            increaseCount="3"
          />

          <StatusCard
            title="Likes"
            icon={Facebook}
            count="52"
            isIncreasing={false}
            increaseCount="2"
          />

          <StatusCard
            title="Likes"
            icon={Instagram}
            count="5462"
            isIncreasing={true}
            increaseCount="2257"
          />

          <StatusCard
            title="Profile Views"
            icon={Instagram}
            count="52K"
            isIncreasing={true}
            increaseCount="1375"
          />

          <StatusCard
            title="Retweets"
            icon={Twitter}
            count="117"
            isIncreasing={true}
            increaseCount="303"
          />

          <StatusCard
            title="Likes"
            icon={Twitter}
            count="507"
            isIncreasing={true}
            increaseCount="553"
          />

          <StatusCard
            title="Likes"
            icon={YouTube}
            count="107"
            isIncreasing={false}
            increaseCount="19"
          />

          <StatusCard
            title="Total Views"
            icon={YouTube}
            count="1407"
            isIncreasing={false}
            increaseCount="12"
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
