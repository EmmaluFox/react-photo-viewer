import React, {useState} from "react";
import {Thumbnail} from "../Thumbnail/Thumbnail";
import './PhotoSelector.css';
import {ImageUrls} from "../data";
import PropTypes from "prop-types";


function PhotoSelector(props) {
    const images = ImageUrls
        .map((url, index) => 
            <li className="photo-option" onClick={() => props.setSelectedUrl(url)} key={index}>
                <Thumbnail src={url} isSelected={url === props.selectedUrl}/>
            </li>
        );
    
    return (
        <section>
            <h2>Select your photo</h2>
            <ul className="photo-list">
                {images}
            </ul>
        </section>
    );
}

PhotoSelector.propTypes = {
    selectedUrl: PropTypes.string.isRequired,
    setSelectedUrl: PropTypes.func.isRequired,
};

export { PhotoSelector };