import Avatar from '../Avatar.component';
import {testSnapshots} from '../../../utils/Test.utils';

describe('Avatar snapshot', () => {
  testSnapshots(Avatar, [
    {
      props: {
        urlAvatar: 'http://api.randomuser.me/landscape/male/2323.jpg',
      },
      description: 'default renderer',
    },
  ]);
});
