"use client"

import { useEffect, useState, useRef } from "react";

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return count;
}

const stats = [
  { value: 67, suffix: "%", label: "Youth face mental health challenges" },
  { value: 13000, suffix: "+", label: "Student suicides every year" },
  { value: 94, suffix: "%", label: "Never seek professional help" },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 2000, visible);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="text-5xl md:text-6xl font-bold text-[#F5A623]">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-gray-600 mt-2 text-center text-lg">{label}</p>
    </div>
  );
}

export const Stats = () => {
  return (
    <section className="py-16 px-4 bg-[#FFFBF0]">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-tight text-gray-900">
        India&apos;s Student Mental Health Crisis
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, idx) => (
          <StatItem key={idx} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  );
};
