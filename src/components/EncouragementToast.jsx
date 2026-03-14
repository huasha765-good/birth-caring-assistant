import React from 'react';
import { Heart } from 'lucide-react';

const EncouragementToast = () => {
  // 鼓励消息列表
  const encouragements = [
    "你是宝宝最好的爸爸！加油！",
    "每一个好爸爸都是从新手开始的，你一定能做到！",
    "照顾好老婆和孩子，你就是最棒的爸爸！",
    "相信自己，你正在成为一个伟大的父亲！",
    "你的陪伴是老婆和孩子最需要的！",
    "一步一步来，你做得很好！",
    "今天也要加油哦，准爸爸！"
  ];

  // 随机选择一条鼓励消息
  const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 mx-4 flex items-center border border-gray-200 max-w-[90%]">
        <Heart className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
        <p className="text-caption-lg text-gray-800 break-words">{randomEncouragement}</p>
      </div>
    </div>
  );
};

export default EncouragementToast;
