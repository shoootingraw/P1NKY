// AntTrail.jsx
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const AntTrail = () => {
  const antTrailRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      const antColor = [255, 255, 255];
      const antsNum = 2750;
      const sensorOffset = 20;
      const clockwise = 30;
      const counter = -30;

      let ants;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.angleMode(p.DEGREES);
        p.pixelDensity(1);
        p.background(0);
        ants = createAnts();
      };

      p.draw = () => {
        p.background(0, 5);

        p.stroke(255);
        p.strokeWeight(30);
        if (p.mouseIsPressed) {
          p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
        }

        p.loadPixels();
        for (let i = 2; i--; ) {
          updateAngle();
          updatePosition();
        }
        p.updatePixels();
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      const ant = () => ({
        x: p.width / 2,
        y: p.height / 2,
        angle: p.random(360),
        step: p.random(2, 3),
      });

      function createAnts() {
        const antsArray = [];
        for (let i = antsNum; i--; ) antsArray.push(ant());
        return antsArray;
      }

      function smell(a, d) {
        const aim = a.angle + d;
        let x = 0 | (a.x + sensorOffset * p.cos(aim));
        let y = 0 | (a.y + sensorOffset * p.sin(aim));
        x = (x + p.width) % p.width;
        y = (y + p.height) % p.height;

        const index = (x + y * p.width) * 4;
        return p.pixels[index];
      }

      function updateAngle() {
        for (const a of ants) {
          const right = smell(a, clockwise),
            center = smell(a, 0),
            left = smell(a, counter);

          if (center > left && center > right) {
            /* Carry on straight */
          } else if (left < right) a.angle += clockwise;
          else if (left > right) a.angle += counter;
        }
      }

      function updatePosition() {
        for (const a of ants) {
          a.x += p.cos(a.angle) * a.step;
          a.y += p.sin(a.angle) * a.step;
          a.x = (a.x + p.width) % p.width;
          a.y = (a.y + p.height) % p.height;

          const index = ((0 | a.x) + (0 | a.y) * p.width) * 4;
          p.pixels.set(antColor, index);
        }
      }
    };

    const p5Instance = new p5(sketch, antTrailRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={antTrailRef} style={{ position: 'absolute', top: 0, left:0 }} />;
};

export default AntTrail;
