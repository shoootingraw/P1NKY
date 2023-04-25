// Noise.js
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

function Noise() {
  const noiseRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let canvasWidth;
      let canvasHeight;

      p.setup = () => {
        canvasWidth = p.windowWidth * 0.2;
        canvasHeight = p.windowHeight * 0.2;
        p.createCanvas(canvasWidth, canvasHeight);
        p.pixelDensity(1);
        p.noStroke();
      };

      p.draw = () => {
        p.loadPixels();

        for (let y = 0; y < canvasHeight; y++) {
          for (let x = 0; x < canvasWidth; x++) {
            const index = (x + y * canvasWidth) * 4;
            const gray = p.random(0, 255);
            p.pixels[index] = gray;
            p.pixels[index + 1] = gray;
            p.pixels[index + 2] = gray;
            p.pixels[index + 3] = 255;
          }
        }

        p.updatePixels();
      };

      p.windowResized = () => {
        canvasWidth = p.windowWidth * 0.2;
        canvasHeight = p.windowHeight * 0.2;
        p.resizeCanvas(canvasWidth, canvasHeight);
      };
    };

    new p5(sketch, noiseRef.current);
  }, []);

  return <div ref={noiseRef} className="absolute" style={{ zIndex: 0 }} />;

}

export default Noise;
