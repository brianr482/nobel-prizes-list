import { css } from '@emotion/react';

import RobotoRegularFont from 'assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoMediumFont from 'assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoBoldFont from 'assets/fonts/Roboto/Roboto-Bold.ttf';

export default css`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularFont});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumFont});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldFont});
    font-weight: 700;
    font-style: normal;
  }
`;
