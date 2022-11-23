import React from "react"

const User = (props) =>
    <div>
        <h1>
            {props.who.name.first} 
            {props.who.name.last}
        </h1>
    </div>;
export default User;
