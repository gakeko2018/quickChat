import React from "react";
import { shallow } from "enzyme";
import ArrowButton from "../src/components/Button/ArrowButton";
import StyledButton from "../src/components/Button/StyledButton";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let wrapper2;

beforeEach(() => {
  wrapper = shallow(<ArrowButton text="ArrowButton" onPress={() => {}} />);
  wrapper2 = shallow(<StyledButton text="ArrowButton" onPress={() => {}} />);
});

describe("Buttons renders correctly", () => {
  it(" ArrowButton renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it(" StyledButton renders correctly", () => {
    expect(wrapper2).toMatchSnapshot();
  });
});
