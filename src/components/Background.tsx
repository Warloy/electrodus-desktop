import { useRef, ReactNode } from "react";

const Background = ({children} : { children:ReactNode}) => {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  return(
    <>
      <svg className="h-screen w-full flex-1">
        <defs>
          <radialGradient id="0" gradientTransform="translate(0.13 0.13) scale(0.75, 0.75)">
            <stop offset="0%" stop-color="#28547d"/>
            <stop offset="100%" stop-color="#3d3852"/>
          </radialGradient>
        </defs>
        <rect fill="url(#0)" height="100%" width="100%"/>
      </svg>
    {children}
    </>
  );
}

export default Background;