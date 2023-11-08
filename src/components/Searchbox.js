import React from "react";

const Searchbox = (props) => {
    return (
        <div className="pa2">
            {/* we can add html attribute onchange, <element onchange="myScript"> */}
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={props.searchChange}
            />

        </div>
    );
}
export default Searchbox;