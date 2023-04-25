import React from "react";
import { motion as m} from "framer-motion";

function EnterView() {

  return (
    // 画面全体を覆い、flexboxで中央揃えにする
    <m.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity:1 }}
      transition={{ duration: 0.9, delay:0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black"
    >
      {/* "Loading"テキストを表示 */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }} // opacity を 0, 1, 0 の順に変化させる
        transition={{
          duration: 1.7,
          delay: 0.9,
          ease: "easeOut",
          times: [0, 0.5, 1], // アニメーションのタイミングを指定
        }}
        exit={{ opacity: 0 }}
        className="text-2xl mb-4 text-white tracking-widest"
      >
        P
      </m.div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }} // opacity を 0, 1, 0 の順に変化させる
        transition={{
          duration: 1.7,
          delay: 1.0,
          ease: "easeOut",
          times: [0, 0.5, 1], // アニメーションのタイミングを指定
        }}
        exit={{ opacity: 0 }}
        className="text-2xl mb-4 text-white tracking-widest"
      >
        1
      </m.div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }} // opacity を 0, 1, 0 の順に変化させる
        transition={{
          duration: 1.7,
          delay: 1.1,
          ease: "easeOut",
          times: [0, 0.5, 1], // アニメーションのタイミングを指定
        }}
        exit={{ opacity: 0 }}
        className="text-2xl mb-4 text-white tracking-widest"
      >
        N
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }} // opacity を 0, 1, 0 の順に変化させる
        transition={{
          duration: 1.7,
          delay: 1.2,
          ease: "easeOut",
          times: [0, 0.5, 1], // アニメーションのタイミングを指定
        }}
        exit={{ opacity: 0 }}
        className="text-2xl mb-4 text-white tracking-widest"
      >
        K
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }} // opacity を 0, 1, 0 の順に変化させる
        transition={{
          duration: 1.7,
          delay: 1.3,
          ease: "easeOut",
          times: [0, 0.5, 1], // アニメーションのタイミングを指定
        }}
        exit={{ opacity: 0 }}
        className="text-2xl mb-4 text-white tracking-widest"
      >
        Y
      </m.div>

    </m.div>

  );
}

export default EnterView;
