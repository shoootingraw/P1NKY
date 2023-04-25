import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Noise = () => {
  const noiseRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let particles = [];
      let colors = [];
      let parNum = 1000;
      let mySize;

      class Particle {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.pos = p.createVector(this.x, this.y);

          this.life = p.random(1);
          this.c = p.color(p.random(colors));
          this.ff = 0;
        }

        update() {
          this.ff = p.noise(this.pos.x / 100, this.pos.y / 100) * p.TWO_PI;
          let mainP = 1200;
          let changeDir = p.TWO_PI / mainP;
          let roundff = p.round((this.ff / p.TWO_PI) * mainP);
          this.ff = changeDir * roundff;

          if (this.ff < 6 && this.ff > 3) {
            this.c = colors[0];
            p.stroke(this.c);
            this.pos.add(p.tan(this.ff) * p.random(1, 3), p.tan(this.ff));
          } else {
            this.c = colors[1];
            p.stroke(this.c);
            this.pos.sub(p.sin(this.ff) * p.random(0.1, 1), p.cos(this.ff));
          }
        }

        show() {
          p.noFill();
          p.strokeWeight(p.random(1.25));
          let lx = 20;
          let ly = 20;
          let px = p.constrain(this.pos.x, lx, p.width - lx);
          let py = p.constrain(this.pos.y, ly, p.height - ly);
          p.point(px, py);
        }

        finished() {
          this.life -= p.random(p.random(p.random(p.random()))) / 10;
          this.life = p.constrain(this.life, 0, 1);
          if (this.life === 0) {
            return true;
          } else {
            return false;
          }
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        colors[0] = p.color(15, 90, 90, p.random(25, 50));
        colors[1] = p.color(175, 90, 90, p.random(25, 50));
        for (let i = 0; i < parNum; i++) {
          particles.push(new Particle(p.random(p.width), p.random(p.height)));
        }
        p.background(0, 0, 5, 100);
      };

      p.draw = () => {
        for (let j = particles.length - 1; j > 0; j--) {
          particles[j].update();
          particles[j].show();
          if (particles[j].finished()) {
            particles.splice(j, 1);
            p.background(0, 0, 5, 0.1);
          }
        }

        for (let i = particles.length; i < parNum; i++) {
          particles.push(new Particle(p.random(p.width), p.random(p.height)));

        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    new p5(sketch, noiseRef.current);
  }, []);

  return <div ref={noiseRef} className="absolute inset-0" style={{ zIndex: 0 }} />;

};

export default Noise;

