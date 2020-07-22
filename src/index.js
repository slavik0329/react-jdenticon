import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import jdenticon from 'jdenticon';

const Jdenticon = ({ value = 'test', size = '100%', config, style }) => {
  const icon = useRef(null);
  useEffect(() => {
    if (config) {
        jdenticon.config = config;
    }

    jdenticon.update(icon.current, value);
  }, [value]);

  return (
    <div style={style}>
      <svg data-jdenticon-value={value} height={size} ref={icon} width={size} />
    </div>
  );
};

Jdenticon.propTypes = {
  size: PropTypes.string,
  value: PropTypes.string.isRequired
};
export default Jdenticon;
