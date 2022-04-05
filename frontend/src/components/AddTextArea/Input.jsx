import React from "react";
import './AddTextArea.css';
import PropTypes from "prop-types";

const Input = () =>{
    return(
        <div>
            <input
                placeholder="Поиск..."
                className="textarea"
                type="text">
            </input>
        </div>
    );
}

Input.propTypes = {

};

Input.defaultProps = {

};

export default Input;