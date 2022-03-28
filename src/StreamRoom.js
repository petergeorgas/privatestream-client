import React from 'react'
import { useRef, useEffect } from 'react';

function StreamRoom() {

const streamVideo = useRef();

    // We need to get the screen capture.
    useEffect(() => {
        navigator.mediaDevices.getDisplayMedia({video: true}).then(stream => {
            streamVideo.current.srcObject = stream;
        });
    }, []);


  return (
    <video autoplay ref={streamVideo} style={{width: 854, height: 480}}/>
  )
}

export default StreamRoom