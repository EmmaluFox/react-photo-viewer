import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {ImageUrls} from "./data";
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import TestRenderer from 'react-test-renderer';
import {Thumbnail} from "./Thumbnail/Thumbnail";
import {wait} from "@testing-library/dom";
import * as thumbnail from "@testing-library/react/dist/@testing-library/react.pure.umd";
import {PhotoSelector} from "./PhotoSelector/PhotoSelector";

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

describe("Thumbnail", () => {
  
  it("Should select thumbnail on click", async () => {
    const {getByClassName: getByClassName} = render(<PhotoSelector selectedUrl={"https://i.picsum.photos/id/602/1600/900.jpg"} setSelectedUrl={"https://i.picsum.photos/id/602/1600/900.jpg"}/>);
    const unSelectedThumbnail = getByClassName("thumbnail-image");
    const selectedThumbnail = getByClassName("thumbnail-image selected");
    
    const photoSelector = render(<PhotoSelector selectedUrl={"https://i.picsum.photos/id/602/1600/900.jpg"} setSelectedUrl={"https://i.picsum.photos/id/602/1600/900.jpg"}/>);
    await wait(()=> );

    fireEvent.click(photoSelector);
    
    await wait(()=> thumbnailSelectedTrue);
    
    
    
  })
  
  

});



