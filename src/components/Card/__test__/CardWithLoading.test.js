import CardWithLoading from '../CardWithLoading.component';
import {testSnapshots} from '../../../utils/Test.utils';

// eslint-disable-next-line no-undef
describe('CardWithLoading snapshot', () => {
  testSnapshots(CardWithLoading, [
    {
      props: {},
      description: 'default renderer',
    },
  ]);
});
