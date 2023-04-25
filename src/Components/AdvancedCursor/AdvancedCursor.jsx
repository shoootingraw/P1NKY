import React, { useEffect, useRef } from 'react';
import './AdvancedCursor.css';

const AdvancedCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    const cWidth = 8;
    const fWidth = 40;
    const delay = 10;

    const animate = () => {
      posX += (mouseX - posX) / delay;
      posY += (mouseY - posY) / delay;

      follower.style.left = `${posX - fWidth / 2}px`;
      follower.style.top = `${posY - fWidth / 2}px`;

      cursor.style.left = `${mouseX - cWidth / 2}px`;
      cursor.style.top = `${mouseY - cWidth / 2}px`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      
      <div className="cursor" ref={cursorRef}></div>
      <div className="follower" ref={followerRef}></div>
    </>
  );
};

export default AdvancedCursor;
