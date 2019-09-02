import React from "react";
import { Provider } from "react-redux";

import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ChatApp from "../src/ChatApp";

Enzyme.configure({ adapter: new Adapter() });

const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state
  };
};
describe("Rendering / Map State Props", () => {
  const store = storeFake({}),
    container = shallow(
      <Provider store={store}>
        <ChatApp />
      </Provider>
    );
  it("should container to be not empty", () => {
    expect(container.length).toBeTruthy();
  });
  it("should set map state to props", () => {
    const expectedPropKeys = ["value", "children"];

    expect(Object.keys(container.props())).toEqual(
      expect.arrayContaining(expectedPropKeys)
    );
  });
});
