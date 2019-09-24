import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

global.mount = mount;
