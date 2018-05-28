import React from 'react'
import { shallow } from 'enzyme';
import {COMMAND1} from './edit';

describe('{COMMAND1} Component',()=>{
	let wrapper

	beforeEach(()=>{
		wrapper = shallow(<{COMMAND1} />);
	})

    it('renders the component', () => expect(wrapper.length).toEqual(1));
	
});