import { useState, useMemo } from "react";
import "../scss/playbutton.css";

const PlayButton = () => {
    const [paused, setPaused] = useState(1); //number instead of bool because it's used in the css and "false" !== false
    const [shrink, setShrink] = useState(false);
    const music = useMemo(() => new Audio(`/lofi.mp3`), [])

    const handleClick = () => {
        if (paused === 0) {
            pauseMusic()
            setPaused(1);
        } else {
            playMusic()
            setPaused(0);
        }
    };

    function playMusic() {
        music.play()
    }
    function pauseMusic() {
        music.pause()
    }

    return (
        <div className="wrapper">
            <div
                className="play-shadow"
                style={
                    paused ?
                        { boxShadow: `-30px 49px 68px hsla(331, 66%, 49%, 0.3), 30px 55px 62px hsla(331, 66%, 49%, 0.22)` } :
                        { boxShadow: `-30px 49px 68px hsla(263, 52%, 32%, 0.3), 30px 55px 62px hsla(263, 52%, 32%, 0.22)` }
                }
            ></div>
            <div
                className={shrink ? "button shrink" : "button"}
                style={paused === 0 ? { background: "#d02a79" } : { background: "#48287d" }}                 
                paused={paused}
                onClick={handleClick}
                onMouseDown={() => setShrink(true)}
                onMouseUp={() => setShrink(false)}
            >
                <div className="shapes">
                    <div className="triangle" paused={paused}></div>
                    <div className="rectangle" paused={paused}></div>
                </div>
            </div>
        </div>
    );
};

export default PlayButton;
