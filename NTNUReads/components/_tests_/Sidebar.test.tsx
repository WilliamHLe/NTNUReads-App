import React from 'react';
import { mount } from "enzyme";
import Sidebar from "../filter/Sidebar";

describe('Test Button component', () => {
    it('Test click event when user select the filter', () => {
        const mockCallBack = jest.fn();

        const button = mount(<Sidebar changeFilter={mockCallBack}/>);
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
