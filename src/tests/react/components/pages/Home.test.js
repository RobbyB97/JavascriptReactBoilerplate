/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Home} from '../../../../react/components/pages/Home';


/* Test Config */
let load, component;
beforeEach(() => {
    load = jest.fn();
    component = shallow(<Home load={load}/>);
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


