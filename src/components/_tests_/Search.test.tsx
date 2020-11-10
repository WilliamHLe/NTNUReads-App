import React from 'react';
import { shallow, mount } from "enzyme";
import Search from "../search/Search";
import {Button, Form, FormControl} from "react-bootstrap";



it("renders form and button correctly", () => {
    const wrapper = shallow(<Search />);
    const btn = <Button variant="primary" type="submit">Søk</Button>
    const input = wrapper.find("FormControl");

    expect(input).toHaveLength(1)
    expect(wrapper.contains(btn)).toEqual(true);
});


// We test if the onChange property of the input element
// update the value property when user type in a search word
const search = {
    searchText: "Harry Potter"
};

describe("FormControl", () => {
    it("should change value", () => {
        const wrapper = mount(<Search />);
        const event = { target: { value: search.searchText } };
        const input = wrapper.find("FormControl");

        input.simulate("change", event);
        expect(wrapper.find("input").prop("value")).toBe(search.searchText);
    });
});