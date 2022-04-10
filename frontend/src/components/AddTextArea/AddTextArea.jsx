import React from "react";
import './AddTextArea.css';


const AddTextArea = () => {
    let findenter = React.createRef();
    let findbutton = () => {
        let text = findenter.current.value;
        alert(text);
    }
    return (
        <div>
            <div>
                <input
                    placeholder="Поиск..."
                    className="textarea"
                    ref={findenter}>
                </input>
            </div>
            <div>
                <button className="Button" onClick={findbutton}></button>
            </div>
        </div>
    );
}
export default AddTextArea;
