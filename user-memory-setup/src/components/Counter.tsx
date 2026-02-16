'use client';

import { useState } from 'react';

/**
 * 간단한 카운터 컴포넌트
 * 증가 및 감소 버튼을 제공합니다.
 */
export default function Counter() {
  const [count, setCount] = useState<number>(0);

  // 카운트 증가
  const increment = () => {
    setCount(count + 1);
  };

  // 카운트 감소
  const decrement = () => {
    setCount(count - 1);
  };

  // 카운트 초기화
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-80">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          카운터
        </h1>

        {/* 카운트 표시 */}
        <div className="text-6xl font-bold text-center text-blue-600 mb-8">
          {count}
        </div>

        {/* 버튼 그룹 */}
        <div className="flex flex-col gap-4">
          <button
            onClick={increment}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
          >
            증가 (+)
          </button>

          <button
            onClick={decrement}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
          >
            감소 (-)
          </button>

          <button
            onClick={reset}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}
