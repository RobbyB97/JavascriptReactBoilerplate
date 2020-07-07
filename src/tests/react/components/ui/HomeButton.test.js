/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {HomeButton} from '../../../../react/components/ui/HomeButton';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<HomeButton />);
});


/* Tests */
test('Render Home button component', () => {
    expect(component).toMatchSnapshot();
});

