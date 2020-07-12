/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {UI} from '../../../../react/components/ui/UI';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<UI />);
});


/* Tests */
test('Render UI component', () => {
    expect(component).toMatchSnapshot();
});

