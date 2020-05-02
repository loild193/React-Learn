import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Status from '../component/Status';

storiesOf('Status', module)
  .add(
    'default',
    () => (
      <Status />
    )
  );