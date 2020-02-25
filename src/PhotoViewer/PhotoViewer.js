import React from "react";
import PropTypes from "prop-types";
import "./PhotoViewer.css";

function PhotoViewer(props) {
    return (
        <section>
            <img data-testid="photo" className="selected-photo" src={props.src} alt=""/>
        </section>
    );
}

PhotoViewer.propTypes = {
    src: PropTypes.string.isRequired,
};

export {PhotoViewer};