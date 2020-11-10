import React from 'react';
import { shallow, mount } from "enzyme";
import CreateReview from "../review/CreateReview";

const book = {
    id: 3
}

it("test if props can be passed", () => {
    const wrapper = mount(<CreateReview book={book.id} />);
    expect(wrapper.props().book).toEqual(book.id);
});


