import React from "react";
import ReactDOM from 'react-dom';

const PortalElement = () => {
    return ReactDOM.createPortal(
        <>
            <div className="container mt-5 shadow p-3 border">
            <h5 className="mb-0">Hello I am PortalElement Components <span className="text-dark">(Outside of new root element)</span></h5>
            </div>
        </>,document.getElementById('rootElement')
    )
}

export default PortalElement;