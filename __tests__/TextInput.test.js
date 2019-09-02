import React from "react";
import { shallow } from "enzyme";
import StyledInput from "../src/components/TextInput/StyledInput";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <StyledInput
      placeholder="Message"
      onChangeText={() => {}}
      value={"New Message"}
    />
  );
});

describe("TextInputs renders correctly", () => {
  it(" StyledInput renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
