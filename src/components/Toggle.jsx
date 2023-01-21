import classNames from 'classnames';
import React from 'react';
import { useGlobalContext } from '../store/context';

const Toggle = () => {
  const { theme, changeTheme } = useGlobalContext();
  console.log(theme);
  return (
    <div className="flex items-center justify-center w-full">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        {/* toggle */}
        <div className="relative">
          {/* input */}
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            onChange={changeTheme}
          />
          {/* line */}
          <div
            className={classNames(
              'block w-12 h-6 rounded-[12px]',
              theme ? 'bg-gray-600' : 'bg-dark'
            )}
          ></div>

          {/* dot */}
          <div className="dot absolute left-[3px] top-[3px] bg-dark-700 w-[18px] h-[18px] rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
