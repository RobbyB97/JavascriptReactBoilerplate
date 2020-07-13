/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {DesktopNavigationInternalLink} from '../../../../../react/components/ui/DesktopNavigation/DesktopNavigationInternalLink'


/* Test config */
let component;
beforeEach(() => {
    component = shallow(<DesktopNavigationInternalLink />)
});


/* Tests */
test('Render DesktopNavigationInternalLink component', () => {
    expect(component).toMatchSnapshot();
})