import { ReactNode } from "react";

type CardProps ={
    title: string;
    value: string | ReactNode;
};
export default function Card({title, value}: CardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  )
}
