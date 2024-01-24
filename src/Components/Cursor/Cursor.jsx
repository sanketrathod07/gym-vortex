import React, { useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const cursorBlur = document.querySelector(".cursor-blur");

        const handleMouseMove = (e) => {
            cursor.style.left = e.x + -12 + "px";
            cursor.style.top = e.y + -10 + "px";
            cursorBlur.style.left = e.x + -200 + "px";
            cursorBlur.style.top = e.y + -200 + "px";
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor-blur"></div>
            <div className="cursor"></div>
        </>
    );
};

export default Cursor;
