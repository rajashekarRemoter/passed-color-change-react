import { useState } from "react";
import CallBackColor from "./CallBackColor";

function ChangeColor () {

    const [UIColor, setUIColor] = useState(null);

    const getColor = color => {
        setUIColor(color);
    };

    return (
        <div>
            <textarea
                style={{ background: `${UIColor}`, height: '200px', width: '500px' }}
            />
            <br></br>
            <CallBackColor getColor={getColor}></CallBackColor>
        </div>
    );
}

export default ChangeColor;