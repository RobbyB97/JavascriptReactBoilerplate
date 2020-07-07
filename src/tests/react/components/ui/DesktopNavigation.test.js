/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {DesktopNavigation} from '../../../../react/components/ui/DesktopNavigation';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<DesktopNavigation />);
});


/* Tests */
test('Render Desktop navigation component', () => {
    expect(component).toMatchSnapshot();
});

