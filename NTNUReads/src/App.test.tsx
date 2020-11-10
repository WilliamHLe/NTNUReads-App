import React from 'react';
import App from './App';
import { shallow, mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import Navigation from "./Navigation";


it("renders without crashing", () => {
  shallow(<App />);
});


// Testing the router
test('valid path should shows main page', () => {
  const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
  );
  expect(wrapper.find(Navigation)).toHaveLength(1);
});

