/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {MobileNavigationInternalLink} from '../../../../../react/components/ui/MobileNavigation/MobileNavigationInternalLink'


/* Test config */
let component;
beforeEach(() => {
    component = shallow(<MobileNavigationInternalLink />)
});


/* Tests */
test('Render MobileNavigationInternalLink component', () => {
    expect(component).toMatchSnapshot();
})