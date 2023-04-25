import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EnterView from './Pages/EnterView/EnterView';
import Home from './Pages/Home/Home';
import Content from './Pages/Content/Content';
import './App.css';
import AdvancedCursor from './Components/AdvancedCursor/AdvancedCursor';

function App() {
  // redirectフラグを初期状態としてfalseに設定
  const [redirect, setRedirect] = useState(false);

  // useEffectを使って、画面表示後の処理を行う
  useEffect(() => {
    // redirectがfalseの場合に実行
    if (!redirect) {
      // 3秒後にsetRedirectを実行してredirectをtrueに設定
      setTimeout(() => {
        setRedirect(true);
      }, 3500);
    }
  }, [redirect]);

  return (
  <>
    <AdvancedCursor />
    <Router>
      {/* Routesでルートの定義を行う */}
      <Routes>
        {/* パスが"/"の場合 */}
       <Route path="/" element={redirect ? <Navigate to="/home" /> : <EnterView />} /> *

        {/* パスが"/home"の場合 */}
        <Route path="/home" element={<Home />} />
        {/* パスが"/content"の場合 */}
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
