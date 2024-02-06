import photo1 from "../assets/images/maxence.png";
import photo2 from "../assets/images/maxence-glasses.png"
import { useState } from 'react';

function ClickablePicture() {
    const [click, setClick] = useState(false)

  /*   function displayImage() {
        if (click) {
            return photo1
        }
        else {
            return photo2
        }
    } */

    return (
        <>
            <img onClick={() => { setClick(!click) }} src={click ? photo2 : photo1} alt="ALT" />
        </>
    )
}

export default ClickablePicture;
