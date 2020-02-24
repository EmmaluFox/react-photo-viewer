import React from "react";
import PropTypes from "prop-types";
import "./PhotoViewer.css";

function PhotoViewer(props) {
    return (
        <section>
            <img className="selected-photo" src={props.src} alt=""/>
        </section>
    );
}

PhotoViewer.propTypes = {
    src: PropTypes.string.isRequired,
};

export {PhotoViewer};