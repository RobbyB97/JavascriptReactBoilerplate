/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {MobileNavigationExternalLink} from '../../../../../react/components/ui/MobileNavigation/MobileNavigationExternalLink'


/* Test config */
let component;
beforeEach(() => {
    component = shallow(<MobileNavigationExternalLink />)
});


/* Tests */
test('Render MobileNavigationExternalLink component', () => {
    expect(component).toMatchSnapshot();
})