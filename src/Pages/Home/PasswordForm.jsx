import React, { useState } from 'react';
import './PasswordForm.css';


// パスワード入力フォームを表示するコンポーネント
function PasswordForm({ onPasswordSubmit }) {
  // パスワード入力を管理する状態
  const [password, setPassword] = useState('');

  // パスワードが正しい場合、Contentページに遷移
  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password);
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="bg-transparent border border-white py-2 px-3 mr-4 focus:outline-none focus:ring-2 focus:ring-black text-gray-300 placeholder-gray-300  input-no-cursor"
        type="password"
        placeholder="Enter PIN"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-transparent border border-white py-2 px-4  text-gray-300 input-no-cursor"
      >
        SEND
      </button>
    </form>
  );
}

export default PasswordForm;
