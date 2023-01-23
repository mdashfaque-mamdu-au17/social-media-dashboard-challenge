import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useGlobalContext } from '../../store/context';
import UpArrow from '../../assets/icon-up.svg';
import DownArrow from '../../assets/icon-down.svg';

const StatusCard = (props) => {
  const { theme } = useGlobalContext();
  const { title, icon, count, isIncreasing, increaseCount } = props;
  return (
    <article
      className={classNames(
        'px-6 pt-[27px] pb-[19px] rounded-[5px] w-[326px] h-[125px] transition-colors duration-500 ease-linear hover:cursor-pointer xl:w-[255px]',
        theme
          ? 'bg-cream-white-700 hover:bg-cream-white-600'
          : 'bg-dark-600 hover:bg-dark-700'
      )}
    >
      <div className="flex justify-between items-center">
        <div>
          <p
            className={classNames(
              'text-sm leading-[17px] font-bold',
              theme ? 'text-gray-800' : 'text-gray-500'
            )}
          >
            {title}
          </p>
        </div>
        <div>
          <img src={icon} alt="" />
        </div>
      </div>

      <div className="flex justify-between items-center pt-[23px]">
        <div>
          <h4
            className={classNames(
              'text-[32px] font-bold leading-[39px]',
              theme ? 'text-dark-800' : 'text-white-900'
            )}
          >
            {count}
          </h4>
        </div>
        <div className="flex gap-[3px] items-center">
          <div>
            <img src={isIncreasing ? UpArrow : DownArrow} alt="" />
          </div>
          <p
            className={classNames(
              isIncreasing ? 'text-green-800' : 'text-red-800',
              'text-xs font-bold leading-[15px]'
            )}
          >
            {increaseCount}%
          </p>
        </div>
      </div>
    </article>
  );
};

StatusCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  isIncreasing: PropTypes.bool.isRequired,
  increaseCount: PropTypes.string.isRequired,
};

export default StatusCard;
