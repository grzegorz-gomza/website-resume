import React from "react";
import Typewriter from "typewriter-effect";


const DynamicTyping = (props) => {
    return (
        <Typewriter
            options={{
                strings: props.titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}

export default DynamicTyping;