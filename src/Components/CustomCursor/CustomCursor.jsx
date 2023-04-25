import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

// ここで PasswordForm コンポーネントのインポートを削除します
// import PasswordForm from 'src/Pages/Home/PasswordForm';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
