import { useState } from "react";

function CallBackColor ({ getColor }) {
    
    const [activeColor, setActiveColor] = useState(null);

    const handleChange = e => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value);
    };

    return (
        <input
            onChange={handleChange}
            value={activeColor}
            placeholder='Enter any color name.'
        />
    );
}

export default CallBackColor;