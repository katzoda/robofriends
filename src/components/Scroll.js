import React from "react";

const Scroll = (props) => {
    return (
        // add css style to make it scrollable
        <div style={{ overflowY: 'scroll', border: '2px solid black', height: '800px' }}>
            {props.children}
        </div>
    );

}

export default Scroll;