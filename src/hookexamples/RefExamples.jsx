import React, { useEffect, useRef, useState } from 'react'
import VIDEO from "../components/WhatsApp.mp4";
const RefExamples = () => {
    const [play, setPlay] =useState(true);
    const eleRef = useRef();
    const videoRef = useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style.color='teal';
        eleRef.current.innerText = "React Ref"

    });
    let playORpause=()=>{
        if(play === true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>
        <h1 ref={eleRef}>RefExamples</h1>
        <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>

    </div>
  )
}

export default RefExamples;