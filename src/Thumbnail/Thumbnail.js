﻿import React from "react";
import PropTypes from "prop-types";
import './Thumbnail.css';

function Thumbnail(props) {

    const cssClass = "thumbnail-image" + (props.isSelected ? " selected" : "");

    return <img className={cssClass} src={props.src} alt={""}/>
}

Thumbnail.propTypes = {
    src: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export { Thumbnail };

