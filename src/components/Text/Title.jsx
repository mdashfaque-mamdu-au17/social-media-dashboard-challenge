import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../store/context';
import classNames from 'classnames';

const Title = (props) => {
  const { theme } = useGlobalContext();
  const { type } = props;

  if (type === 'primary') {
    return (
      <h2
        className={classNames(
          'text-2xl leading-[29px] font-bold lg:text-[28px] lg:leading-[34px]',
          theme ? 'text-dark-800' : 'text-white-900'
        )}
      >
        {props.children}
      </h2>
    );
  }

  if (type === 'secondary') {
    return (
      <p
        className={classNames(
          'text-sm leading-[17px] font-bold',
          theme ? 'text-gray-800' : 'text-gray-500'
        )}
      >
        {props.children}
      </p>
    );
  }
};

Title.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default Title;
