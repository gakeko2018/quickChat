import React from "react";
import { shallow } from "enzyme";
import MessageBox from "../src/components/MessageBox/MessageBox";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const username = "John Doe";
const item = {
  id: 4,
  text: "omw",
  timestamp: 1554227223,
  user: {
    avatarUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    id: 2,
    name: "The Fresh Prince"
  }
};

beforeEach(() => {
  wrapper = shallow(<MessageBox username={username} message={item} />);
});

describe("MessageBox rendering", () => {
  it(" MessageBox renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
