// Content.jsx
import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion as m } from "framer-motion";
import AntTrail from "./AntTrail";

const Content = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center">
      <m.div
        initial={{ opacity: 0 }}
        animate={{  opacity: [0, 1, 0] }}
        transition={{ duration: 4, delay: 2, ease: "easeOut" }}
        className="mb-20 text-white z-10 text-2xl tracking-widest"
      >
        Welcome
      </m.div>

      <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 6, ease: "easeOut" }}
      >
      <AntTrail/>
      </m.div>
    </div>
  );
};

export default Content;
