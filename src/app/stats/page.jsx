"use client";
import { FriendContext } from "@/Components/FriendsProvider/FriendsProvider";
import React, { useContext } from "react";
 import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const StatsPage = () => {
  const { timeline } = useContext(FriendContext);

  const call = timeline.filter((item) => item.type === "Call");
  const text = timeline.filter((item) => item.type === "Text");
  const video = timeline.filter((item) => item.type === "Video");

  const data = [
    { type: "Call", count: call.length },
    { type: "Text", count: text.length },
    { type: "Video", count: video.length },
  ];

  if(timeline.length=== 0){
    return <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white rounded-xl shadow-sm">
  
  <div className="text-5xl mb-4">📊</div>

  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
    No analytics available yet
  </h2>

  <p className="text-gray-500 max-w-md leading-relaxed">
    Start interacting with your friends to see insights like calls, texts, and video activity here.
  </p>

</div>
  }
  return (


<div className="w-full max-w-7xl mx-auto py-10 md:py-20 space-y-6 px-4">
  
  <h1 className="font-bold text-3xl md:text-5xl text-center md:text-left">
    Friendship Analytics
  </h1>

  <div className="bg-white rounded-xl p-5 md:p-8 space-y-4 shadow-sm">
    
    <h4 className="font-medium text-lg md:text-xl text-center md:text-left">
      By Interaction Type
    </h4>

    <div className="w-full h-70 sm:h-87.5 md:h-100">
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>

          <Pie
            data={data}
            dataKey="count"
            nameKey="type"
            innerRadius="70%"
            outerRadius="100%"
            cornerRadius={20}
            paddingAngle={5}
          >
            {data.map((item, index) => (
              <Cell
                key={index}
                fill={
                  item.type === "Text"
                    ? "#7E35E1"
                    : item.type === "Call"
                    ? "#244D3F"
                    : item.type === "Video"
                    ? "#37A163"
                    : "#ccc"
                }
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  </div>
</div>
  );
};

export default StatsPage;
