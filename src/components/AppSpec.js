import React from 'react';
import PropTypes from 'prop-types';

const AppSpec = ({app}) =>
      <li>
        {app}
      </li>
export default AppSpec;


AppSpec.propTypes = {
    app: PropTypes.string,
};
