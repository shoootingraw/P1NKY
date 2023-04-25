import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const WindNoise = () => {
  const windNoiseRef = useRef();

  useEffect(() => {
    new p5((sketch) => {
      let particles;
      let alpha;

      sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        sketch.background(0);
        sketch.noStroke();
        setParticles();
      };

      sketch.draw = () => {
        sketch.frameRate(20);
        alpha = sketch.map(sketch.mouseX, 0, sketch.width, 5, 35);
        sketch.fill(0, alpha);
        sketch.rect(0, 0, sketch.width, sketch.height);

        sketch.loadPixels();
        for (let p of particles) {
          p.move();
        }
        sketch.updatePixels();
      };

      function setParticles() {
        particles = new Array(6000);
        for (let i = 0; i < 6000; i++) {
          let x = sketch.random(sketch.width);
          let y = sketch.random(sketch.height);
          let c = sketch.color(255, 255, 255, 100);
          particles[i] = new Particle(x, y, c);
        }
      }

      class Particle {
        constructor(xIn, yIn, cIn) {
          this.posX = xIn;
          this.posY = yIn;
          this.c = cIn;
          this.incr = 0;
        }

        move() {
          this.update();
          this.wrap();
          this.display();
        }

        update() {
          this.incr += 0.008;
          this.theta = sketch.noise(this.posX * 0.006, this.posY * 0.004, this.incr) * sketch.TWO_PI;
          this.posX += 2 * sketch.cos(this.theta);
          this.posY += 2 * sketch.sin(this.theta);
        }

        display() {
          if (this.posX > 0 && this.posX < sketch.width && this.posY > 0 && this.posY < sketch.height) {
            sketch.pixels[(parseInt(this.posX) + parseInt(this.posY) * sketch.width) * 4] = this.c.levels[0];
            sketch.pixels[(parseInt(this.posX) + parseInt(this.posY) * sketch.width) * 4 + 1] = this.c.levels[1];
            sketch.pixels[(parseInt(this.posX) + parseInt(this.posY) * sketch.width) * 4 + 2] = this.c.levels[2];
            sketch.pixels[(parseInt(this.posX) + parseInt(this.posY) * sketch.width) * 4 + 3] = this.c.levels[3];
          }
        }

        wrap() {
          if (this.posX < 0) this.posX = sketch.width;
          if (this.posX > sketch.width) this.posX = 0;
          if (this.posY < 0) this.posY = sketch.height;
          if (this.posY > sketch.height) this.posY = 0;
        }
      }
    }, windNoiseRef.current);

    const currentRef = windNoiseRef.current;
    return () => {
      // Clean up when the component is unmounted
      currentRef.removeChild(currentRef.childNodes[0]);
    };
  }, []);

  return (
    <div className="w-full h-full" ref={windNoiseRef}></div>
  );
};

export default WindNoise;
