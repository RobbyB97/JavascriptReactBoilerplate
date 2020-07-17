/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Home} from '../../../../react/components/pages/Home';


/* Test Config */
let component, load, page_ID__Set;
beforeEach(() => {
    load = jest.fn();
    page_ID__Set = jest.fn();
    component = shallow(
        <Home 
            load={load}
            page_ID__Set={page_ID__Set}
        />
    );
});


/* Tests */
test('Render Home page', () => {
    expect(component).toMatchSnapshot();
});


test('Initial state', () => {
    expect(component.state('loaded')).toBe(false);
    expect(component.state('loading')).toBe(false);    
});


test('Load function', () => {
    setTimeout(() => {
        expect(load).toHaveBeenCalled();
    }, 500);
});


test('Page_ID__Set function', () => {
    setTimeout(() => {
        expect(page_ID__Set).toHaveBeenCalled();
    }, 500);
});

