"use client";
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const moodChangeData = [
  { name: "Often", value: 40 },
  { name: "Sometimes", value: 30 },
  { name: "Rarely", value: 15 },
  { name: "Everyday", value: 10 },
  { name: "Never", value: 5 },
];

const COLORS = [
  "#2A3B8F", // deep blue
  "#A3B8F7", // lavender
  "#B3C7F7", // light blue
  "#F8F9FF", // cloud white
  "#D1D9F7", // soft periwinkle
];

const stats = [
  { label: "Positive Feedback", value: "75%", bar: 0.75 },
  { label: "Would Recommend", value: "75%", bar: 0.75 },
  { label: "Responses", value: "200+", bar: 1.0 },
];

export const Survey = () => (
  <section className="flex flex-col items-center justify-center py-10 w-full">
    <h2 className="text-3xl font-bold mb-8">Survey Insights</h2>
    <div className="flex flex-col md:flex-row w-full max-w-5xl bg-gray-200 rounded-xl p-6 gap-8 items-center md:items-stretch">
      {/* Left: Chart */}
      <div className="flex-1 flex items-center justify-center min-w-[250px]">
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={moodChangeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {moodChangeData.map((entry, index) => (
                  <Cell key={`cell-mood-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Right: Stats */}
      <div className="flex flex-col gap-6 w-full md:w-1/3 justify-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="bg-white rounded-md shadow px-6 py-6 text-4xl font-bold text-gray-900 min-w-[100px] text-center">
              {stat.value}
            </div>
            <div className="flex-1 h-10 rounded-md bg-[#A3B8F7] relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-md"
                style={{
                  width: `${stat.bar * 100}%`,
                  background: COLORS[idx % COLORS.length],
                  transition: 'width 0.5s',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
