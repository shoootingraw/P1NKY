import React, { useEffect, useState } from 'react';

// プログレスバーを表示するコンポーネント
function ProgressBar({ duration }) {
  // プログレスバーの状態
  const [progress, setProgress] = useState(0);

  // durationの時間でプログレスバーを100%にする
  useEffect(() => {
    // setIntervalを使って、durationを100分割した時間ごとにプログレスバーの値を更新する
    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress + 1);
    }, duration /100);

    // コンポーネントがアンマウントされた時、またはdurationが変更された時に、intervalをクリアする
    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  // プログレスバーのスタイルを設定し、widthをprogressの値に応じて動的に変更する
  return (
    <div className="relative w-full h-2 bg-gray-300">
      <div
        className="absolute left-0 h-2 bg-black"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
  
  

}

// ProgressBarコンポーネントをエクスポートする
export default ProgressBar;
