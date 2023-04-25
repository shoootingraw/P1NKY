import React from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordForm from './PasswordForm';
import 'tailwindcss/tailwind.css';
import { motion as m } from 'framer-motion';
import GenerativeNoise from "./GenerativeNoise"
import LastAccess from './LastAccess';


function Home() {
  // useNavigateフックを使って、画面遷移のための関数を取得
  const navigate = useNavigate();

  // パスワードの送信処理
  const handlePasswordSubmit = (password) => {
    // パスワードが正しい場合
    if (password === 'P1NKY') {
      // /contentへ遷移する
      navigate('/content');
    } else {
      // パスワードが違う場合、アラートを表示
      alert('Please enter the correct PIN code.');
    }
  };

  return (
    <div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 overflow-hidden flex items-center justify-center flex-col ">
        <GenerativeNoise />

        <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9,delay:3, ease: 'easeOut' }}>
            <div className="relative  mb-3 z-10 text-2xl text-gray-200 tracking-widest">
              P1NKY
            </div>
            <div className="relative mb-20 z-10">
              <PasswordForm onPasswordSubmit={handlePasswordSubmit} />
            </div>
        </m.div>
      </div>
    </div>
  );
  
  
}

export default Home;