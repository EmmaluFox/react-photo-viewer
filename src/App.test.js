import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {ImageUrls} from "./data";
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import TestRenderer from 'react-test-renderer';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('count number of urls', () => {
  //arrange
  const imageUrls = ImageUrls;
  const arrayLength = imageUrls.length;
  //act
  
  //assert
  expect(arrayLength).toBe(44);
  
});
describe("PhotoViewer", () => {
  it("Should not change", async () => {
    const tree = TestRenderer.create(<PhotoViewer src={ImageUrls[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

});
