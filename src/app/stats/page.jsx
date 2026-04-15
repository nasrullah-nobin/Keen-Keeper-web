"use client";
import { FriendContext } from "@/Components/FriendsProvider/FriendsProvider";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
    const {timeline} = useContext(FriendContext)
    console.log(timeline)
  const data = [{
    data: timeline.length, value: timeline.type
  }];
  return (
    <div className="w-7xl mx-auto py-20">
      <h1 className="font-bold text-5xl">Friendship Analytics</h1>

      <div>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
          />
        <Tooltip />
        <Legend/>
        </PieChart>
      </div>
    </div>
  );
};

export default StatsPage;
