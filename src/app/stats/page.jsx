"use client";
import { FriendContext } from "@/Components/FriendsProvider/FriendsProvider";
import React, { useContext } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

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
    <div className="w-full md:w-7xl mx-auto py-10 md:py-20 space-y-6">
      <h1 className="font-bold text-5xl">Friendship Analytics</h1>

      <div className="bg-white rounded p-8 space-y-2">
        <h4 className="font-medium text-xl">By Interaction Type</h4>
        <PieChart width={400}  height={400} className="mx-auto">
          <Pie
            data={data}
            dataKey="count"
            nameKey="type"
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
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
      </div>
    </div>
  );
};

export default StatsPage;
