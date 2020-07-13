/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {DesktopNavigationExternalLink} from '../../../../../react/components/ui/DesktopNavigation/DesktopNavigationExternalLink'


/* Test config */
let component;
beforeEach(() => {
    component = shallow(<DesktopNavigationExternalLink />)
});


/* Tests */
test('Render DesktopNavigationExternalLink component', () => {
    expect(component).toMatchSnapshot();
})