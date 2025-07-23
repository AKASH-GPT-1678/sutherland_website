"use client";
import React from 'react'

const MiddleImageScreen = () => {

    const divRef = React.useRef<HTMLDivElement>(null);

    const scrollByScreen = () => {
        if (divRef.current) {
      divRef.current.scrollBy({
        left: window.innerWidth, // scroll by one full screen
        behavior: 'smooth',
      });
    }

    }
    return (
        <div className="flex w-[300vw] h-screen overflow-x-scroll scroll-smooth snap-x snap-mandatory "  ref={divRef} >

            <div className="w-screen h-screen flex-shrink-0 snap-start p-10 "  >
                <video
                    src="https://meat-bucket-2025.s3.ap-south-1.amazonaws.com/sutherland.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-screen h-full object-cover mr-32 "
                ></video>
            </div>
            <div className="w-screen h-screen flex-shrink-0 snap-start">
                <video
                    src="https://meat-bucket-2025.s3.ap-south-1.amazonaws.com/sutherland.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                ></video>
            </div>
            <div className="w-screen h-screen flex-shrink-0 snap-start">
                <video
                    src="https://meat-bucket-2025.s3.ap-south-1.amazonaws.com/sutherland.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                ></video>
            </div>
             <button
        onClick={scrollByScreen}
        className="top-1/2 right-4 z-10 bg-white/60 px-4 py-2 rounded-full shadow"
      >Scrlluuuuuuu</button>
        </div>

    )
}

export default MiddleImageScreen;
