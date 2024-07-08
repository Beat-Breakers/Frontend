import React from 'react';

export const splitText = (text) => {
    return text.split('').map((char, index) => {
        if (char == " ") {
            return <span key={index} className="char">
                &nbsp;
            </span>;
        } else if (char == "/") {
            return <span key={index} className="char">
                <br />
            </span>;
        }
        return <span key={index} className="char">
            {char}
        </span>
    });
};

export const roboTextSplit = (text) => {
    return text.split('').map((char, index) => {
        return <span key={index} className="roboChar">
            {char}
        </span>
    });
};
