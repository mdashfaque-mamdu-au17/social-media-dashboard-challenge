import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../store/context';
import UpArrow from '../../assets/icon-up.svg';
import DownArrow from '../../assets/icon-down.svg';

const SocialMediaCard = (props) => {
  const { theme } = useGlobalContext();
  const {
    iconImage,
    name,
    count,
    countType,
    isIncreasing,
    followersCount,
    styles,
  } = props;
  return (
    <div
      className={classNames(
        'pb-6 relative rounded-[5px] border-t-4  text-center w-[326px] h-[216px] hover:cursor-pointer transition-colors duration-500 ease-linear',
        theme
          ? 'bg-cream-white-700 hover:bg-cream-white-600 '
          : 'bg-dark-600 hover:bg-dark-700',
        styles
      )}
    >
      {/* <div className={classNames('h-1 rounded-t-lg', styles)}></div> */}
      <div className="flex justify-center gap-2 items-center pt-8">
        <div>
          <img src={iconImage} alt="" />
        </div>
        <div>
          <p
            className={classNames(
              'text-xs leading-[15px] font-bold',
              theme ? 'text-gray-800' : 'text-gray-500'
            )}
          >
            {name}
          </p>
        </div>
      </div>

      <div>
        <div className="pt-[29px] pb-[9px]">
          <h2
            className={classNames(
              'text-[56px] leading-[48px] font-bold tracking-[-2px]',
              theme ? 'text-dark-800' : 'text-white-900'
            )}
          >
            {count}
          </h2>
        </div>
        <p
          className={classNames(
            'uppercase text-xs font-normal leading-[15px] tracking-[5px]',
            theme ? 'text-gray-800' : 'text-gray-500'
          )}
        >
          {countType}
        </p>
      </div>

      <div className="flex justify-center items-center gap-1 pt-[25px]">
        <div>
          <img src={isIncreasing ? UpArrow : DownArrow} alt="" />
        </div>
        <div>
          <p
            className={classNames(
              isIncreasing ? 'text-green-800' : 'text-red-800',
              'font-bold text-xs leading-[15px]'
            )}
          >
            {followersCount} Today
          </p>
        </div>
      </div>
    </div>
  );
};

SocialMediaCard.propTypes = {
  iconImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  countType: PropTypes.string.isRequired,
  isIncreasing: PropTypes.bool.isRequired,
  followersCount: PropTypes.string.isRequired,
};

export default SocialMediaCard;
