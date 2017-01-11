import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import CopyButton from '../../components/CopyButton';

storiesOf('CopyButton', module)
  .addWithInfo(
    '',
    `
      The copy button can be used when the user needs to copy information, such as a code snippet, to their clipboard.
    `,
    () => (
      <CopyButton feedback="Copied!" onClick={action('onClick')} feedbackTimeout={3000}>Copy</CopyButton>
    )
  );