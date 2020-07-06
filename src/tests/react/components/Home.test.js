/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Home} from '../../../react/components/pages/Home';


/* Tests */
test('Render Home page', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
});