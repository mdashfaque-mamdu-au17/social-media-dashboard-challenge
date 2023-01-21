import classNames from 'classnames';
import React from 'react';
import Title from '../components/Text/Title';
import Toggle from '../components/Toggle/Toggle';
import { useGlobalContext } from '../store/context';

const Navbar = () => {
  const { theme } = useGlobalContext();
  return (
    <nav className={classNames(theme ? 'bg-cream-white-800' : 'bg-dark-900')}>
      <div className="max-w-[1110px] mx-auto lg:flex lg:justify-between lg:items-start lg:pt-9 lg:pb-[154px] lg:px-6 xl:px-0">
        <div className="pt-9 px-6 lg:pt-0 lg:px-0">
          <div>
            <Title type="primary">Social Media Dashboard</Title>
          </div>
          <div className="pt-1 pb-6 lg:pb-0">
            <Title type="secondary">Total Followers: 23,004</Title>
          </div>
          <div
            className={classNames(
              'h-[1px]',
              theme ? 'bg-gray-900' : 'bg-dark-700',
              'lg:hidden'
            )}
          ></div>
        </div>
        <div className="flex justify-between items-center px-6 pt-4 pb-[84px] lg:justify-start lg:gap-[13px] lg:pb-0 lg:px-0 lg:pt-[13px]">
          <div>
            <p
              className={classNames(
                'text-sm font-bold leading-[17px]',
                theme
                  ? 'text-gray-800 lg:text-gray-900'
                  : 'text-gray-500 lg:text-white-900'
              )}
            >
              Dark Mode
            </p>
          </div>
          <div>
            <Toggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
