import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {ImageUrls} from "./data";

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
