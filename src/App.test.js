import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {ImageUrls} from "./data";
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import TestRenderer from 'react-test-renderer';
import {Thumbnail} from "./Thumbnail/Thumbnail";
import {getByText, wait} from "@testing-library/dom";
import * as thumbnail from "@testing-library/react/dist/@testing-library/react.pure.umd";
import {PhotoSelector} from "./PhotoSelector/PhotoSelector";
import {element} from "prop-types";
import {findRenderedDOMComponentWithClass} from "react-dom/test-utils";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('count number of urls', () => {
  //arrange
  const arrayLength = ImageUrls.length;
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

// describe("Thumbnail", () => {
//
//   it("Should select thumbnail on click", async () => {
//     const {getByClassName: getByClassName} = render(<PhotoSelector selectedUrl={"https://i.picsum.photos/id/602/1600/900.jpg"} setSelectedUrl={"https://i.picsum.photos/id/602/1600/900.jpg"}/>);
//     const unSelectedThumbnail = getByClassName("thumbnail-image");
//     const selectedThumbnail = getByClassName("thumbnail-image selected");
//
//     const photoSelector = render(<PhotoSelector selectedUrl={"https://i.picsum.photos/id/602/1600/900.jpg"} setSelectedUrl={"https://i.picsum.photos/id/602/1600/900.jpg"}/>);
//     await wait(()=> );
//
//     fireEvent.click(photoSelector);
//
//     await wait(()=> thumbnailSelectedTrue);
//
//
//
//   })
//
//
//
// });


test('Check thumbnails select image', async () => {

  const component = render(<App/>);

  const thumbnail = component.queryAllByTestId("testThumbnail");
  fireEvent.click(thumbnail[3]);
  await wait(()=>expect(thumbnail[3].className).toBe("thumbnail-image selected"));
  

});

test('Check photo viewer image is same as selected thumbnail', async () => {
  
  const component = render(<App/>);
  const thumbnail = component.queryAllByTestId("testThumbnail");
  const photo = component.queryAllByTestId("photo");
  
  await wait(()=> expect(photo[0].src).not.toBe( thumbnail[3].src ));
  
  fireEvent.click(thumbnail[3]);

  await wait(()=> expect(photo[0].src).toBe(thumbnail[3].src));
  
  
  
  
  
});


