import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Status from '../component/Status';
import Suggestion from '../component/Suggestion';


storiesOf('Status', module)
  .add(
    'see-status',
    () => (
      <Status />
    )
  )
  .add(
    'follow-suggestion',
    () => (
      <Suggestion img="" nickName="sr_itsmyfault"/>
    )
  );